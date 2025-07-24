# Cliff Consulting Web Page Summary

## Project Overview
This repository powers the [cliffconsulting.com](https://cliffconsulting.com/) website, a serverless web application showcasing Matt Cliff’s career and freelance work.

## Tech Stack
- Frontend: React (Create React App), Reactstrap, Bootstrap
- Build & Runtime: Node.js
- Hosting & CDN: AWS S3, CloudFront
- CI/CD: AWS CodePipeline, CodeBuild, CloudFormation
- DNS & SSL: AWS Route 53, ACM

## Repository Structure
- `src/` – React application source code (components, views, assets)
- `public/` – Static files served by the app (HTML, icons, meta files)
- `css/`, `images/` – Supporting stylesheets and image assets
- `package.json`, `package-lock.json` – Project dependencies and scripts
- `eslint.config.js(.mjs)` – Linting configuration
- `robots.txt`, `sitemap.xml`, `google*.html` – SEO and search console files

## Local Development
1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Access at `http://localhost:3000`

## Deployment
Deployment is managed via AWS CloudFormation and CodePipeline:
1. Provision infrastructure stack (S3 bucket, CloudFront distribution, DNS records, CodeBuild/CodePipeline) using CFN templates.
2. Push code to the designated Git branch to trigger CodePipeline.
3. Pipeline builds, publishes the React app to the S3-backed CDN, and invalidates CloudFront cache.

## References
- Project README for detailed history and process notes.
- Create React App docs: https://github.com/facebook/create-react-app
