# Basic Node.js Informational Server

A simple Node.js HTTP server that serves static HTML pages for learning and practice.

## Pages

- `/` -> Home page
- `/about` -> About Us page
- `/contact-me` -> Contact Us page
- Any unknown route -> Custom 404 page

## Project Structure

- `index.js` - Main server file
- `index.html` - Home page
- `about.html` - About Us page
- `contact-me.html` - Contact Us page
- `404.html` - Page Not Found template

## Requirements

- Node.js (version 14 or newer recommended)

## Run the Project

1. Open a terminal in the project folder.
2. Run:

```bash
node index.js
```

3. Open your browser and go to:

`http://localhost:8080`

## Notes

This project uses Node's built-in `http` and `fs` modules, so no external dependencies are required.
