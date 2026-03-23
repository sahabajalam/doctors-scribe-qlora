# Deploy to Google Cloud Run (Project: medgeema-soap)
$ErrorActionPreference = "Stop"

$PROJECT_ID = "medgeema-soap"
$REGION = "us-central1"

Write-Host "Configuring Google Cloud Project: $PROJECT_ID..." -ForegroundColor Cyan

# 0. Create/Set Project & Enable APIs (Uncomment if needed, or run manually once)
# Write-Host "Creating project $PROJECT_ID..."
# try { gcloud projects create $PROJECT_ID } catch { Write-Warning "Project might already exist." }
Write-Host "Setting active project..."
gcloud config set project $PROJECT_ID

# Write-Host "Enabling Billing (User must do this manually if not linked)..."
# Write-Host "Enabling APIs..."
# gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 1. Build the Docker image using Cloud Build
Write-Host "Submitting build to Cloud Build..."
# Using Artifact Registry instead of GCR
gcloud builds submit --tag "us-central1-docker.pkg.dev/$PROJECT_ID/doctors-scribe-repo/doctors-scribe-frontend" .

# 2. Deploy to Cloud Run
Write-Host "Deploying to Cloud Run..."
gcloud run deploy doctors-scribe-frontend `
    --image "us-central1-docker.pkg.dev/$PROJECT_ID/doctors-scribe-repo/doctors-scribe-frontend" `
    --platform managed `
    --region $REGION `
    --allow-unauthenticated

Write-Host "Deployment complete!" -ForegroundColor Green
