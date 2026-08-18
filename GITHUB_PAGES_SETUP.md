# Publish Jingni Zhang's academic website

This repository is ready for GitHub Pages.

## Recommended repository name

Create a public repository named `YOUR-USERNAME.github.io`, replacing
`YOUR-USERNAME` with your GitHub username. This naming pattern publishes the
website at the clean address `https://YOUR-USERNAME.github.io/`.

## Publish

1. Upload the contents of this folder to the repository's `main` branch.
2. Open **Settings**, select **Pages**, and choose **GitHub Actions** under
   **Build and deployment**.
3. Open the **Actions** tab. The `Deploy academic website to GitHub Pages`
   workflow will build and publish the site automatically.
4. Future pushes to `main` will update the live website.

## Update the site

- Main content: `app/page.tsx`
- Colors and layout: `app/globals.css`
- Browser title and description: `app/layout.tsx`
- Downloadable CV: `public/jingni-zhang-cv.pdf`

Replace the CV file with the same filename whenever you update it. GitHub Pages
will publish the new version after the next push.
