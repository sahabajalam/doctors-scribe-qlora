# Deploy to GitHub Pages
# Usage: .\deploy.ps1 <remote-url>

param (
    [string]$RemoteUrl
)

if (-not $RemoteUrl) {
    Write-Host "Error: Please provide a GitHub repository URL."
    Write-Host "Usage: .\deploy.ps1 https://github.com/sahabajalam/doctors-scribe-qlora.git"
    exit 1
}

# Link Remote
git remote add origin $RemoteUrl

# Deploy
npm run deploy
