# Challenge 1 – Cloud File Uploader (AWS)

**Objective**  
Create a simple web app that uploads files to Amazon S3 and returns a public link.

**Setup Steps**  
1. Run `npm install` to install dependencies.  
2. Configure `.env` with your AWS keys, region, and bucket name.  
3. Start the server: `node index.js`.  
4. Open the HTML file, choose a file, click **Upload**.  
5. The public link is printed after successful upload.

**Tools Used**  
- Node.js + Express  
- AWS S3 and SDK v3  
- AI Tooling (used ChatGPT to generate boilerplate code)

**Challenges / Learnings**  
Understood how presigned URLs control temporary upload access to S3 and how to manage AWS credentials safely.
