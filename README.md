# TEDxDPS Monarch Intl School Youth — Website

🌐 **Live Website:** [https://13la7e.github.io/TedxDPS-Monarch-Intl-School/](https://13la7e.github.io/TedxDPS-Monarch-Intl-School/)

This is a full-featured static website for the TEDx event at DPS Monarch International School Youth, ready to deploy on **GitHub Pages**.

Active Link: https://13la7e.github.io/TedxDPS-Monarch-Intl-School/

## 📁 Contents
- `index.html` — Landing page
- `about.html` — About the event
- `talks.html` — Past/current talks
- `team.html` — Organizing team
- `apply.html` — Speaker application form (front-end only, needs backend integration)
- `contact.html` — Contact details
- `assets/` — CSS, JS, images

## 🚀 Deploy to GitHub Pages

1. **Initialize a Git repository** (if not already done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: TEDx website"
   ```

2. **Create a new GitHub repository** at https://github.com/new

3. **Push your code to GitHub**:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select `main` branch and `/ (root)` folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 💻 Run Locally

Use a simple static server:

```powershell
# Option 1: Python 3
python -m http.server 8000

# Option 2: Node.js
npx serve -l 8000
```

Then open `http://localhost:8000` in your browser.

## 🔄 Cache-Busting System

This project includes an automatic cache-busting system to ensure users always see the latest version of your CSS and JavaScript files without needing to manually force-refresh.

### Automatic Setup (Recommended):

**A Git pre-commit hook is included** that automatically updates cache-busting version numbers before every commit.

To set it up, run:

```powershell
# Windows (PowerShell)
.\setup-hooks.ps1

# Linux/Mac (Bash)
./setup-hooks.sh
```

Once installed, every time you commit, the version numbers will be automatically updated! No manual steps needed.

### How it works:
- All CSS and JS files include a version parameter (e.g., `styles.css?v=1762176751716`)
- The pre-commit hook runs `npm run build` automatically before each commit
- Version numbers are timestamp-based, so they change with every commit
- Users' browsers automatically fetch the latest files on each deployment
- Works with GitHub Actions deployment

### Manual Build (Optional):
If you need to update the cache-busting version without committing:

```powershell
npm run build
```

This will update all HTML files with a new timestamp-based version parameter.

### Deployment:
When you push changes to GitHub, the GitHub Actions workflow automatically:
1. Runs the cache-busting build
2. Updates version numbers
3. Deploys the updated site to GitHub Pages

**No more force-refreshing needed!** 🎉

## ✏️ Customizing

### Content
- Update team member names and roles in `team.html`
- Add event date/location details in `index.html` and `about.html`
- Replace social media links in `contact.html`
- Add email address in `contact.html`

### Design
- Edit colors/fonts in `assets/css/styles.css` (see CSS variables at the top)
- Replace the logo in `assets/images/logo.svg` with your custom design

### Forms
The apply and contact forms are front-end only. To make them functional:
- **Option 1**: Use [Formspree](https://formspree.io/) — add `action="https://formspree.io/f/YOUR_FORM_ID"` to the `<form>` tag
- **Option 2**: Use [EmailJS](https://www.emailjs.com/) or similar service
- **Option 3**: Build your own backend API

## 📝 License
MIT
