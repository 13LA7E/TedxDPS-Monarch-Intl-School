# Setup Git Hooks for Automatic Cache-Busting

Write-Host "🔧 Setting up Git pre-commit hook..." -ForegroundColor Cyan

# Copy the pre-commit hook to .git/hooks
$hookSource = "hooks\pre-commit"
$hookDest = ".git\hooks\pre-commit"

if (Test-Path $hookSource) {
    Copy-Item $hookSource $hookDest -Force
    
    # Make it executable
    icacls $hookDest /grant Everyone:F | Out-Null
    
    Write-Host "✅ Pre-commit hook installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "The cache-busting build will now run automatically before every commit." -ForegroundColor Yellow
    Write-Host "Version numbers will be updated without manual intervention." -ForegroundColor Yellow
} else {
    Write-Host "❌ Error: hooks/pre-commit file not found!" -ForegroundColor Red
    exit 1
}
