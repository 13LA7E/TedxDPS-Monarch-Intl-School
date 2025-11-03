#!/bin/bash
# Setup Git Hooks for Automatic Cache-Busting (Linux/Mac)

echo "🔧 Setting up Git pre-commit hook..."

# Copy the pre-commit hook to .git/hooks
cp hooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

echo "✅ Pre-commit hook installed successfully!"
echo ""
echo "The cache-busting build will now run automatically before every commit."
echo "Version numbers will be updated without manual intervention."
