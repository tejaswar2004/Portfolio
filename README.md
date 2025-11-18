# 🚀 Tejaswar Reddy - Portfolio

<div align="center">

A modern, responsive portfolio website showcasing my skills, projects, and experience as an SDET Engineer & Test Automation Specialist.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌟 Features

- ✅ **Modern & Responsive Design**: Fully responsive for mobile, tablet, and desktop
- ✅ **Smooth Animations**: Beautiful animations using Framer Motion
- ✅ **Interactive Sections**: Hero, About, Skills, Projects, Experience, Contact
- ✅ **Downloadable CV**: Direct PDF download functionality
- ✅ **Social Media Integration**: Links to LinkedIn, GitHub, and Email
- ✅ **Dark Theme**: Modern dark color scheme
- ✅ **Smooth Scrolling**: React Scroll for seamless navigation
- ✅ **Type Animation**: Animated text in hero section

---

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling
- **React Type Animation** - Text animations
- **React Icons** - Icon library

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Clone the Repository

```bash
git clone https://github.com/tejaswar2004/your-repo-name.git
cd your-repo-name
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

---

## 🚀 Deployment to GitHub Pages (Step-by-Step)

Follow these steps to publish your portfolio and get a shareable URL:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `portfolio`, `my-portfolio`, `tejaswar-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (since you already have files)
7. Click **"Create repository"**

### Step 2: Initialize Git in Your Project (If not already done)

Open your terminal in the project folder and run:

```bash
# Check if git is already initialized
git status

# If not initialized, run these commands:
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 3: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/tejaswar2004/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Install gh-pages Package (For Deployment)

```bash
npm install --save-dev gh-pages
```

### Step 5: Update package.json

Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 6: Update vite.config.js

Update your `vite.config.js` file to include the base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

**Replace `YOUR_REPO_NAME` with your actual repository name.**

**Example:**
```javascript
base: '/portfolio/',
```

### Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your project
- Create a `gh-pages` branch
- Deploy the `dist` folder to GitHub Pages

### Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 9: Access Your Portfolio

Wait 2-5 minutes for GitHub Pages to build, then visit:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://tejaswar2004.github.io/portfolio/
```

---

## 🔗 Share Your Portfolio

Once deployed, you can share your portfolio URL:

### For LinkedIn Bio:
1. Copy your GitHub Pages URL
2. Go to your LinkedIn profile
3. Click "Edit" on your profile
4. Paste the URL in the "Website" or "Custom" link section
5. Example: `🌐 Portfolio: https://tejaswar2004.github.io/portfolio/`

### Portfolio URL Format:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 📁 Project Structure

```
my-portfolio-v2-master/
├── public/
│   ├── favicon.ico
│   ├── Lingareddy_Tejaswar_Reddy_Resume.pdf  # Your CV file
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionTitle.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.jsx  # Main data file - Edit this to update content
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ✏️ Customization

### Update Your Information

Edit `src/data/portfolioData.jsx` to update:
- Personal information (name, title, bio, email)
- Social media links (LinkedIn, GitHub)
- Skills and technologies
- Projects
- Work experience
- Education

### Update Resume/CV

1. Place your PDF resume in the `public/` folder
2. Update the `resumeLink` in `src/data/portfolioData.jsx`:

```javascript
resumeLink: "/YOUR_RESUME_FILENAME.pdf"
```

### Change Colors/Themes

Edit `tailwind.config.js` to customize the color scheme.

---

## 🔄 Updating Your Portfolio

After making changes:

1. **Build and test locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

3. **Deploy again:**
   ```bash
   npm run deploy
   ```

Your portfolio will be updated in a few minutes!

---

## 📝 Important Notes

- ⚠️ **Make sure your repository is PUBLIC** for free GitHub Pages hosting
- ⚠️ **Update vite.config.js** with your actual repository name in the `base` path
- ⚠️ **CV File**: Make sure your PDF resume is in the `public/` folder and the filename matches in `portfolioData.jsx`

---

## 🤝 Contributing

This is my personal portfolio, but feel free to fork it and use it for your own portfolio!

---

## 📄 License

This project is open source and available for personal use.

---

## 👤 Author

**Tejaswar Reddy**

- 📧 Email: tejaswarreddy2003@gmail.com
- 💼 LinkedIn: [Tejaswar Reddy](https://www.linkedin.com/in/tejaswar2004)
- 🔗 GitHub: [@tejaswar2004](https://github.com/tejaswar2004)

---

## ⭐ Show Your Support

If you like this portfolio template, give it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ using React, Vite, and Tailwind CSS**

[⬆ Back to Top](#-tejaswar-reddy---portfolio)

</div>
