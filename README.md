# Deploy this project on Vercel

This is a simple static project. The `vercel.json` routes root (`/`) to `Quiz.html` so the site serves at the project root.

Quick deploy options:

- Using Vercel CLI (recommended):

```bash
npx vercel login
cd "c:\Users\saksh\OneDrive\Desktop\Quiz"
npx vercel
```

- Using the Vercel Dashboard:
  - Create a new project and link your repository or drag-and-drop this folder.
  - Vercel will detect a static site; deploy.

Optional: rename `Quiz.html` to `index.html` to avoid the route and remove `vercel.json`.
