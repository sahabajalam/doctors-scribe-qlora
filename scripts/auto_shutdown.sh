#!/bin/bash

# Configuration
# Threshold for CPU usage (in percent) to consider the instance idle.
CPU_THRESHOLD=5
# Time in minutes the CPU must be below the threshold before shutting down.
IDLE_TIME_MINUTES=5
# Range of time (in seconds) to average CPU usage over (to avoid spikes).
SAMPLE_INTERVAL_SECONDS=60

# Check for active SSH connections? (1 = yes, 0 = no)
# If set to 1, the instance will NOT shut down if there is an active SSH connection.
CHECK_SSH=1

# Log file path
LOG_FILE="/var/log/auto_shutdown.log"

# Helper function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to get current CPU usage
get_cpu_usage() {
    # Uses top to get CPU usage. The second iteration is used to get a more accurate reading.
    # grep "Cpu(s)" extracts the CPU line.
    # awk '{print $2 + $4}' adds user and system CPU usage.
    top -bn2 -d 1 | grep "Cpu(s)" | tail -1 | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}'
}

# Function to check for active SSH sessions
has_active_ssh() {
    if [ "$CHECK_SSH" -eq 1 ]; then
        # Check if there are any pts sessions (pseudo-terminals), which usually indicates SSH.
        # w -h returns headerless list of logged in users.
        SSH_SESSIONS=$(w -h | grep -v 'console' | wc -l)
        if [ "$SSH_SESSIONS" -gt 0 ]; then
            return 0 # True, ssh sessions exist
        fi
    fi
    return 1 # False, no ssh sessions or check disabled
}

# -----------------------------------------------------------------------------
# Main Logic
# -----------------------------------------------------------------------------

log_message "Auto-shutdown monitoring started. CPU Threshold: ${CPU_THRESHOLD}%, Idle Time: ${IDLE_TIME_MINUTES}m"

IDLE_COUNTER=0
REQUIRED_IDLE_CYCLES=$((IDLE_TIME_MINUTES * 60 / SAMPLE_INTERVAL_SECONDS))

while true; do
    CPU_USAGE=$(get_cpu_usage)
    # Convert float to integer for comparison
    CPU_USAGE_INT=${CPU_USAGE%.*}

    log_message "Current CPU Usage: ${CPU_USAGE}%"

    if has_active_ssh; then
        log_message "Active SSH session detected. Resetting idle counter."
        IDLE_COUNTER=0
    elif [ "$CPU_USAGE_INT" -lt "$CPU_THRESHOLD" ]; then
        IDLE_COUNTER=$((IDLE_COUNTER + 1))
        log_message "CPU is idle ($CPU_USAGE% < $CPU_THRESHOLD%). Idle counter: $IDLE_COUNTER/$REQUIRED_IDLE_CYCLES"
    else
        IDLE_COUNTER=0
        log_message "CPU is active ($CPU_USAGE% >= $CPU_THRESHOLD%). Resetting idle counter."
    fi

    if [ "$IDLE_COUNTER" -ge "$REQUIRED_IDLE_CYCLES" ]; then
        log_message "Idle time limit reached. Shutting down instance..."
        # It is good practice to sync before shutdown to ensure data is written to disk
        sync
        # Shut down command. -h is halt (poweroff).
        sudo poweroff
        exit 0
    fi

    sleep "$SAMPLE_INTERVAL_SECONDS"
done
