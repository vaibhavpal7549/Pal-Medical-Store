# Deployment Guide — Pal Medical Store Website

This guide walks you through deploying the **Pal Medical Store** web application to production across various platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
1. **Local Build Passes:**
   ```bash
   npm run build
   ```
   Ensure there are zero compilation or TypeScript errors.
2. **Environment Variables Ready:**
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`
   - `GOOGLE_PLACES_API_KEY`
3. **Git Repository Up to Date:**
   ```bash
   git status
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

---

## ⚡ Option 1: Deploy on Vercel (Recommended)

Vercel is the official platform for Next.js and provides zero-configuration deployments, global CDN caching, automatic SSL, and instant preview environments.

### Method A: Deploy via Vercel Web Dashboard (Easiest)

1. Go to **[vercel.com](https://vercel.com/)** and sign in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository: **`vaibhavpal7549/Pal-Medical-Store`** and click **"Import"**.
4. Configure Project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default)
5. Expand **"Environment Variables"** and add:
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID` = `ChIJr5DU5cFnkDkRiTqkfG2dvTQ`
   - `GOOGLE_PLACES_API_KEY` = `your_google_places_api_key_here`
6. Click **"Deploy"**.
7. In about 1 minute, your site will be live with a production URL (e.g. `https://pal-medical-store.vercel.app`).

### Method B: Deploy via Vercel CLI

1. Install Vercel CLI globally (or run with `npx`):
   ```bash
   npm install -g vercel
   ```
2. Run deployment command:
   ```bash
   vercel
   ```
3. Follow the on-screen prompts to link your account and set environment variables.
4. For production release:
   ```bash
   vercel --prod
   ```

### Custom Domain on Vercel:
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain (e.g., `palmedicalstore.com`).
3. Add the provided **A record** (`76.76.21.21`) or **CNAME record** (`cname.vercel-dns.com`) in your domain registrar (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.).

---

## 🌐 Option 2: Deploy on Netlify

1. Go to **[netlify.com](https://www.netlify.com/)** and sign in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Connect your GitHub repository.
4. Configure Build Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Go to **"Site configuration"** → **"Environment variables"** and add:
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`
   - `GOOGLE_PLACES_API_KEY`
6. Click **"Deploy site"**. Netlify automatically installs the `@netlify/plugin-nextjs` adapter.

---

## 🖥️ Option 3: Deploy on VPS / Ubuntu Linux (Node.js + PM2 + Nginx + SSL)

If deploying to your own Virtual Private Server (Hostinger, DigitalOcean, AWS EC2, Linode, Hetzner, etc.):

### Step 1: Prepare the Server
Connect to your VPS via SSH:
```bash
ssh user@your_server_ip
```

Update system packages and install Node.js (v20 LTS), Git, Nginx, and PM2:
```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx git
sudo npm install -g pm2
```

### Step 2: Clone Repository & Install Dependencies
```bash
cd /var/www
sudo git clone https://github.com/vaibhavpal7549/Pal-Medical-Store.git pal-medical-store
sudo chown -R $USER:$USER /var/www/pal-medical-store
cd pal-medical-store

npm install
```

### Step 3: Configure Environment Variables
Create the production `.env.local` file:
```bash
nano .env.local
```
Add:
```env
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJr5DU5cFnkDkRiTqkfG2dvTQ
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
```
Save with `Ctrl + O`, then exit with `Ctrl + X`.

### Step 4: Build the Application
```bash
npm run build
```

### Step 5: Start & Manage with PM2
```bash
pm2 start npm --name "pal-medical-store" -- start
pm2 save
pm2 startup
```

### Step 6: Configure Nginx Reverse Proxy
Create an Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/pal-medical-store
```
Paste the following:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the configuration and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/pal-medical-store /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 7: Install Free SSL Certificate (Certbot)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Certbot will automatically configure HTTPS and auto-renewals.

---

## 🐳 Option 4: Deploy with Docker

If you prefer containerized deployment:

1. **Build Docker Image:**
   ```bash
   docker build -t pal-medical-store .
   ```

2. **Run Container:**
   ```bash
   docker run -d -p 3000:3000 \
     -e NEXT_PUBLIC_GOOGLE_PLACE_ID="ChIJr5DU5cFnkDkRiTqkfG2dvTQ" \
     -e GOOGLE_PLACES_API_KEY="your_google_places_api_key" \
     --name pal-medical-app \
     pal-medical-store
   ```

---

## 🔄 Updating the Live Application

Whenever you push new code to GitHub:

### If using Vercel or Netlify:
Deployment is **automatic** upon pushing to the `main` branch.

### If using VPS / Ubuntu:
```bash
cd /var/www/pal-medical-store
git pull origin main
npm install
npm run build
pm2 restart pal-medical-store
```
