# Quiz Game (Static Site)

This is a simple HTML/CSS/JS quiz project.

## Deploy on Vercel

Vercel serves static sites automatically when there is an `index.html` at the repository root.

### Deploy from Vercel Dashboard (recommended)

- Go to Vercel → **Add New… → Project**
- Import the GitHub repo
- **Framework Preset**: Other
- **Build Command**: (leave empty)
- **Output Directory**: (leave empty)
- Click **Deploy**

### Deploy using Vercel CLI

```bash
cd "C:\Users\saksh\OneDrive\Desktop\Quiz"
npx vercel
```

For a production deployment:

```bash
npx vercel --prod
```

## Notes

- Entry point is `index.html`.
- `Quiz.html` is kept for compatibility, but Vercel will open `index.html` at `/`.
