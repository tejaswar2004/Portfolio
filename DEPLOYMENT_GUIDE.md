# 🚀 Portfolio Deployment Guide - GitHub Pages

Follow these step-by-step instructions to publish your portfolio online and get a shareable URL for your LinkedIn bio.

---

## 📋 Prerequisites

- Git installed on your computer
- GitHub account (if you don't have one, create it at github.com)
- Node.js and npm installed (for building the project)

---

## 📝 Step-by-Step Deployment Instructions

### **Step 1: Install gh-pages Package**

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all dependencies including `gh-pages` which we need for deployment.

---

### **Step 2: Update Vite Config for Your Repository Name**

**IMPORTANT:** Before deploying, you need to update the `base` path in `vite.config.js` to match your GitHub repository name.

1. Open `vite.config.js`
2. Change the `base` value to match your repository name:
   - If your repository will be named `portfolio` → change to `base: '/portfolio/'`
   - If your repository will be named `my-portfolio` → change to `base: '/my-portfolio/'`
   - **Keep your repository name in lowercase and match it exactly!**

**Example:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Change this to your actual repository name
})
```

---

### **Step 3: Create a GitHub Repository**

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: Choose a name (e.g., `portfolio`, `my-portfolio`, `tejaswar-portfolio`)
   - ⚠️ **Remember this name** - you'll need it for Step 2!
5. Description: "My personal portfolio website"
6. Make it **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

---

### **Step 4: Initialize Git and Push to GitHub**

Open your terminal in the project folder and run these commands **one by one**:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# For example, if your username is tejaswar2004 and repo is "portfolio":
# git remote add origin https://github.com/tejaswar2004/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username (e.g., `tejaswar2004`)
- `REPO_NAME` with your repository name (e.g., `portfolio`)

---

### **Step 5: Build and Deploy to GitHub Pages**

After pushing your code, run the deploy command:

```bash
npm run deploy
```

This command will:
1. Build your React app for production
2. Deploy it to GitHub Pages automatically

**Note:** On first deployment, you might be asked to authenticate with GitHub. Follow the prompts.

---

### **Step 6: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**
5. Click **"Save"**

---

### **Step 7: Wait for Deployment**

- GitHub Pages takes **1-5 minutes** to deploy
- You'll see a green checkmark when it's done
- You can check deployment status in the **"Actions"** tab

---

### **Step 8: Get Your Portfolio URL**

Your portfolio will be live at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**Examples:**
- If username is `tejaswar2004` and repo is `portfolio`:
  ```
  https://tejaswar2004.github.io/portfolio/
  ```
- If username is `tejaswar2004` and repo is `my-portfolio`:
  ```
  https://tejaswar2004.github.io/my-portfolio/
  ```

---

### **Step 9: Update LinkedIn Bio**

Copy your portfolio URL and add it to your LinkedIn profile:

1. Go to your LinkedIn profile
2. Click **"Edit profile"**
3. In the **"About"** section, add something like:
   ```
   SDET Engineer & Test Automation Specialist
   
   Check out my portfolio: https://tejaswar2004.github.io/portfolio/
   ```
4. Or add it as a **"Website"** link in your profile header

---

## 🔄 Updating Your Portfolio (After Changes)

Whenever you make changes to your portfolio:

1. Make your changes to the code
2. Run these commands:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

Your changes will be live in 1-5 minutes!

---

## ⚠️ Troubleshooting

### **Problem: White page or 404 error**

**Solution:** Check that the `base` path in `vite.config.js` exactly matches your repository name (case-sensitive, must include trailing slash).

### **Problem: Assets not loading**

**Solution:** Make sure the `base` path starts and ends with `/` (e.g., `/portfolio/` not `portfolio`)

### **Problem: Build fails**

**Solution:** 
```bash
npm install
npm run build
```
Check for any error messages and fix them.

### **Problem: Deployment not working**

**Solution:**
1. Make sure you've run `npm install` first
2. Check that `gh-pages` is installed: `npm list gh-pages`
3. Try deploying again: `npm run deploy`

---

## 📝 Quick Command Reference

```bash
# Install dependencies
npm install

# Run locally (for testing)
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Git commands for updates
git add .
git commit -m "Your message"
git push origin main
npm run deploy
```

---

## 🎉 Congratulations!

Once deployed, your portfolio URL will be live and shareable! Add it to:
- LinkedIn bio
- Resume
- Email signature
- Social media profiles

---

**Need Help?** Check GitHub Pages documentation: https://pages.github.com/

