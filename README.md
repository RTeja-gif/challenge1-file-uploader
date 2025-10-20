# Challenge 1 — Simple File Uploader

## Objective
A minimal web app where a user uploads a file from the browser; the server issues a signed URL and the file is stored in AWS S3.

## How to run locally (for reviewers)
1. Put your real AWS keys in a local `.env` (DO NOT push real keys to GitHub).
2. Install:
   npm install
3. Run the server:
   node index.js
4. Open:
   http://localhost:3000/frontend.html
5. Choose a file and click Upload. The page shows the public URL.

## Files
- `index.js` — Node.js backend (serves frontend + `/sign` endpoint)
- `public/frontend.html` — simple frontend to select & upload
- `.env` — placeholder file (do NOT use real keys in the repo)
- `screenshots/` — upload demo screenshots

## Hosted demo
(Place your hosted URL here after deployment)

## Reflection
I learned how to generate S3 presigned URLs and safely separate secrets from code. The tricky part was fixing CORS and ensuring the frontend and backend are same-origin during testing.

## AI tools used
I used ChatGPT to help generate code snippets, debug CORS issues, and create the README. I verified and tested all code personally.
