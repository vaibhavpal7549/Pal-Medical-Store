# How to Run — Pal Medical Store Website

This guide provides step-by-step instructions for setting up and running the **Pal Medical Store** web application locally on your system.

---

## 📋 System Requirements & Prerequisites

Before starting, make sure you have the following installed:

| Requirement | Recommended Version | Check Command |
| :--- | :--- | :--- |
| **Node.js** | `v20.x` or `v22.x` (LTS) | `node -v` |
| **npm** | `v10.x` or higher | `npm -v` |
| **Git** | Latest | `git --version` |

> [!NOTE]
> If Node.js is not installed, download the LTS version from [nodejs.org](https://nodejs.org/).

---

## 🛠️ Step 1: Clone or Navigate to the Project

If you already have the project folder:
```bash
cd pal-medical-store
```

If cloning from GitHub:
```bash
git clone https://github.com/vaibhavpal7549/Pal-Medical-Store.git
cd Pal-Medical-Store
```

---

## 📦 Step 2: Install Dependencies

Run the following command in the project root directory:

```bash
npm install
```

*(Alternatively, if using Yarn: `yarn install`, or pnpm: `pnpm install`)*

---

## 🔑 Step 3: Configure Environment Variables

The project requires Google Places API credentials to fetch customer reviews.

1. Create a `.env.local` file in the root directory (if it doesn't already exist):

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType File -Name .env.local -Force
   ```

   **Mac / Linux / Bash:**
   ```bash
   touch .env.local
   ```

2. Add the following environment variables to `.env.local`:

   ```env
   # Google Places Configuration for Live Reviews
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJr5DU5cFnkDkRiTqkfG2dvTQ
   GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   ```

> [!IMPORTANT]
> Keep your `.env.local` file confidential. Never commit your API keys to public repositories.

---

## 🚀 Step 4: Run the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Once started, open your browser and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

The app will automatically reload when you modify any source files.

### Running on a Custom Port
If port `3000` is already in use by another service:
```bash
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`.

---

## 🏗️ Step 5: Build and Run for Production Locally

To test the optimized production build locally:

1. **Build the production bundle:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm run start
   ```

3. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔍 Code Quality & Linting

To check the code for syntax or linting errors:

```bash
npm run lint
```

---

## ❓ Troubleshooting & FAQs

### 1. `Port 3000 is in use`
Run on another port:
```bash
npm run dev -- -p 3001
```
Or kill the process on port 3000:
- **Windows (PowerShell):**
  ```powershell
  Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
  ```
- **Mac / Linux:**
  ```bash
  npx kill-port 3000
  ```

### 2. Build Cache Issues / Stale CSS
Clear Next.js build cache and re-run:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next

# Linux / Mac
rm -rf .next

npm run dev
```

### 3. Reviews Not Loading
Verify that `NEXT_PUBLIC_GOOGLE_PLACE_ID` and `GOOGLE_PLACES_API_KEY` are properly defined in your `.env.local` file and that the Google Places API is enabled in your Google Cloud Console.
