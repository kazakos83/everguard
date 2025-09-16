
# 🚀 Vercel Deployment Guide for Everguard Intelligence

## Why Vercel is Perfect for Your Project:
✅ **Built by Next.js creators** - Perfect compatibility
✅ **Zero configuration needed** - Works out of the box
✅ **Contact form works perfectly** - Full API route support
✅ **Free tier available** - No cost to get started
✅ **Custom domain support** - Use your own domain
✅ **Automatic deployments** - Updates when you push code
✅ **Global CDN** - Fast worldwide loading
✅ **Built-in analytics** - Track your website performance

## 📋 Step-by-Step Deployment Process

### Step 1: Download Your Project
1. **Download the project files** from this conversation
2. **Extract to your computer** (you'll get a folder with all your website files)
3. **Open the project folder** in your code editor or file explorer

### Step 2: Set Up Git Repository (2 Options)

#### Option A: GitHub (Recommended)
1. **Go to GitHub.com** and sign in (or create account)
2. **Click "New Repository"** 
3. **Name it:** `everguard-intelligence-website`
4. **Make it Public** (for free deployment)
5. **Don't initialize** with README (you have files already)
6. **Click "Create Repository"**

#### Option B: Use Vercel CLI (Advanced)
Skip to Step 3 if you prefer the CLI method

### Step 3: Upload Your Code to GitHub

#### Using GitHub Website (Easiest):
1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop your entire project folder** 
3. **Write commit message:** "Initial commit - Everguard Intelligence website"
4. **Click "Commit changes"**

#### Using Git Commands (If familiar):
```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit - Everguard Intelligence website"
git branch -M main
git remote add origin https://github.com/yourusername/everguard-intelligence-website.git
git push -u origin main
```

### Step 4: Deploy to Vercel

1. **Go to vercel.com** and click "Sign Up"
2. **Sign in with GitHub** (easiest option)
3. **Click "New Project"** 
4. **Import your GitHub repository:**
   - Find `everguard-intelligence-website`
   - Click "Import"
5. **Configure project:**
   - **Project Name:** `everguard-intelligence`
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./app` (IMPORTANT!)
   - **Build Command:** Leave default (`yarn build`)
   - **Output Directory:** Leave default (`.next`)
6. **Click "Deploy"**

### Step 5: Wait for Deployment
- ⏱️ **First deployment takes 2-3 minutes**
- ✅ **You'll get a live URL** when complete
- 🎉 **Your website is now live!**

### Step 6: Set Up Custom Domain (Optional)

If you want to use your own domain:

1. **In Vercel Dashboard**, go to your project
2. **Click "Domains"** tab
3. **Add your domain** (e.g., `everguardintelligence.com.au`)
4. **Configure DNS** at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```
5. **Wait for DNS propagation** (can take up to 48 hours)

### Step 7: Test Your Live Website

Visit your Vercel URL and test:
- ✅ **All pages load correctly**
- ✅ **Contact form works** (try sending a test message)
- ✅ **Images display properly**
- ✅ **Mobile responsive design**
- ✅ **Navigation works**

## 🔧 SendGrid Configuration for Contact Form

Your contact form uses SendGrid for emails. You'll need to configure this:

### Set Up SendGrid:
1. **Go to sendgrid.com** and create account
2. **Create an API key** in Settings > API Keys
3. **Verify your sender email** in Settings > Sender Authentication

### Add Environment Variables in Vercel:
1. **In Vercel Dashboard**, go to your project
2. **Click "Settings"** > **"Environment Variables"**
3. **Add these variables:**
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM_EMAIL=info@everguardgroup.com.au
   ADMIN_EMAIL=info@everguardgroup.com.au
   ```
4. **Redeploy** your project (Vercel > Deployments > "Redeploy")

## 📱 Automatic Updates

Once deployed, any time you:
1. **Make changes to your code**
2. **Push to GitHub**
3. **Vercel automatically redeploys** your site

This means updates are super easy!

## 💰 Pricing

**Free Tier Includes:**
- ✅ 100GB bandwidth per month
- ✅ Unlimited static requests  
- ✅ 100 serverless function invocations per day
- ✅ Custom domains
- ✅ SSL certificates

This is more than enough for most business websites!

## 🆘 Troubleshooting

### Common Issues:

**Build fails:**
- Make sure Root Directory is set to `./app`
- Check that all files uploaded correctly to GitHub

**Contact form doesn't work:**
- Add SendGrid environment variables
- Verify SendGrid API key is correct
- Check sender email is verified in SendGrid

**Images not loading:**
- Make sure `public` folder is in your repository
- Check image paths are correct

**404 errors:**
- Ensure all page files are in the correct directories
- Check that the build completed successfully

### Need Help?
- **Vercel Docs:** vercel.com/docs
- **Next.js Docs:** nextjs.org/docs
- **SendGrid Docs:** docs.sendgrid.com

## 📞 Support

If you need help:
1. **Check Vercel Dashboard** for deployment logs
2. **Visit Vercel's support** at vercel.com/support  
3. **Check GitHub repository** for any missing files

## ✨ Final Checklist

After deployment, verify:
- [ ] Website loads at Vercel URL
- [ ] All pages accessible (Home, About, Services, Contact)
- [ ] Contact form sends emails successfully  
- [ ] Images display correctly
- [ ] Mobile responsiveness works
- [ ] Custom domain configured (if desired)
- [ ] SendGrid emails working
- [ ] Performance is fast and smooth

**🎉 Congratulations! Your professional investigation services website is now live and accessible worldwide!**
