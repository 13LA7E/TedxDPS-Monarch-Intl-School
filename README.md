# TEDxDPS Monarch Intl School Youth — Website

This is a full-featured static website for the TEDx event at DPS Monarch International School Youth, ready to deploy on **GitHub Pages**.

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
