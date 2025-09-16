
# cPanel Deployment Guide for Everguard Intelligence Website

## Important Notes About Contact Forms
⚠️ **Contact Form Limitation**: Your website currently has a contact form that uses server-side API routes (`/api/contact`). These will NOT work on static hosting. You have two options:

### Option A: Use Third-Party Form Service (Recommended)
Replace the current contact form with services like:
- **Formspree** (formspree.io) - Easy integration, free tier available
- **Netlify Forms** - If you deploy on Netlify instead
- **EmailJS** - Client-side email sending
- **Google Forms** - Embed a Google Form

### Option B: Keep Current Form (Requires Node.js hosting)
If your cPanel supports Node.js applications, you can deploy as a full Next.js app.

## Method 1: Static Export (Most Compatible)

### Step 1: Prepare for Static Export
1. Download your project files to your local machine
2. Open `next.config.js` and replace the content with:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
}

module.exports = nextConfig
```

### Step 2: Remove Server-Side Features
Since you're going static, you need to either:

**Option A: Remove contact form temporarily**
- Comment out or remove the contact form from `/app/components/contact-sections/contact-form.tsx`
- Remove the `/app/api/contact/route.ts` file

**Option B: Replace with static form**
- Replace the form action to point to a service like Formspree
- Update the form submission logic

### Step 3: Build Static Files
```bash
cd your-project-folder
yarn install
yarn build
```

This creates an `out` folder with all static files.

### Step 4: Upload to cPanel
1. Log into your cPanel
2. Open **File Manager**
3. Navigate to your domain's `public_html` folder
4. Upload all contents from the `out` folder to `public_html`
5. Make sure `index.html` is in the root of `public_html`

## Method 2: Node.js Application (If Supported)

### Check Node.js Support
1. Log into cPanel
2. Look for **Node.js App** or **Node.js Selector**
3. If available, proceed with this method

### Steps for Node.js Deployment
1. Create a new Node.js app in cPanel
2. Set Node.js version to 18+ if available
3. Upload your entire project folder
4. Install dependencies: `npm install` or `yarn install`
5. Set startup file to `server.js` or configure for Next.js
6. Configure environment variables in cPanel

## Method 3: Alternative Hosting (Recommended)

Consider these alternatives that better support Next.js:

### Free Options:
- **Vercel** (vercel.com) - Made by Next.js creators, perfect integration
- **Netlify** (netlify.com) - Great for static sites with forms
- **GitHub Pages** - For static exports only

### Paid Options:
- **DigitalOcean App Platform**
- **Railway**
- **Heroku**

## Contact Form Solutions

### Formspree Integration Example:
Replace your current form action with:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### EmailJS Integration:
1. Sign up at emailjs.com
2. Install EmailJS: `npm install emailjs-com`
3. Replace your form submission logic with EmailJS calls

## File Structure for Static Export:
```
public_html/
├── index.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── services/
│   └── index.html
├── _next/
│   └── static/
└── images/
```

## Testing Your Deployment:
1. Visit your domain
2. Test all navigation links
3. Check that images load correctly
4. Test contact form (if using external service)
5. Verify mobile responsiveness

## Troubleshooting:

### Common Issues:
1. **404 Errors**: Make sure all files are in correct directories
2. **Images not loading**: Check file paths and case sensitivity
3. **Contact form not working**: Implement external form service
4. **CSS not loading**: Verify `_next` folder is uploaded correctly

### File Permissions:
Set folder permissions to 755 and files to 644:
```bash
find public_html/ -type d -exec chmod 755 {} \;
find public_html/ -type f -exec chmod 644 {} \;
```

## Final Checklist:
- [ ] Next.js app configured for static export
- [ ] Contact form replaced with external service or removed
- [ ] Static files generated successfully
- [ ] All files uploaded to cPanel public_html
- [ ] Website accessible via domain
- [ ] All pages loading correctly
- [ ] Contact form working (if implemented)
- [ ] Mobile responsiveness verified

## Need Help?
If you encounter issues:
1. Check cPanel error logs
2. Contact your hosting provider about Node.js support
3. Consider using Vercel for easier Next.js deployment
