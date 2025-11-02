# Cache-Busting Setup Complete! 🎉

Your TEDx website now has automatic cache-busting enabled. Here's what was set up:

## What Changed:

### 1. **Build Script (`build.js`)**
   - Automatically adds version parameters to all CSS and JS file references
   - Version is based on timestamp, so it changes with every build
   - Example: `styles.css?v=1762096827182`

### 2. **Package.json Scripts**
   - Added `npm run build` command to update cache-busting versions
   - Run this locally whenever you want to force a version update

### 3. **GitHub Actions Workflow**
   - Automatically runs `npm run build` on every push to main branch
   - Deploys updated files to GitHub Pages
   - **No manual intervention needed!**

### 4. **HTML Meta Tags**
   - Added cache-control headers to all HTML files
   - Prevents HTML pages from being cached (but allows CSS/JS caching with versioning)

### 5. **All HTML Files Updated**
   - CSS and JS links now include version parameters
   - Will be automatically updated on each deployment

## How To Use:

### For Local Development:
```powershell
# After making CSS or JS changes, run:
npm run build

# This updates all HTML files with new version numbers
```

### For Deployment:
```powershell
# Just commit and push as normal:
git add .
git commit -m "Update styles"
git push origin main

# GitHub Actions will automatically:
# 1. Run the build script
# 2. Update version numbers
# 3. Deploy to GitHub Pages
```

## Benefits:

✅ **No more force-refresh** (Ctrl+Shift+R / Cmd+Shift+R)
✅ **Users automatically get latest styles** on every deployment
✅ **Browser caching still works** (improves performance)
✅ **Fully automated** via GitHub Actions
✅ **Works on all browsers**

## Testing:

1. Make a change to `assets/css/styles.css`
2. Run `npm run build` locally
3. Check any HTML file - the `?v=` number should be updated
4. Push to GitHub and verify the live site updates automatically

## How It Works:

When browsers see `styles.css?v=1762096827182`, they treat it as a unique URL. When the version number changes to `styles.css?v=1762096999999`, browsers see it as a different file and fetch it again, bypassing the cache.

---

**You're all set!** Every time you push changes via GitHub Actions, your styles and scripts will automatically refresh for all users. 🚀
