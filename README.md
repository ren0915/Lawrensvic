# Lawrensvic M. Arangel — GitHub Pages Portfolio

## Required sections included
1. About Me — name, program, introduction, career goals/aspirations.
2. Hobbies and Interests — badminton, volleyball, mobile games, K-Dramas, sleeping.
3. Skills — programming, web development, tools, and other technical/professional skills.
4. Projects — project descriptions, GitHub repository buttons, and space for screenshots/live demos.

The site is responsive for desktop, laptop, tablet, and mobile devices.

## Where to put pictures
Use this exact structure in your GitHub repository:

```text
your-repository/
├── index.html
├── portfolio.css
├── portfolio.js
├── .nojekyll
└── assets/
    ├── profile/
    │   └── profile.jpg
    ├── projects/
    │   ├── qr-attendance.jpg
    │   ├── student-profiling.jpg
    │   └── rain-detector.jpg
    └── places/
        ├── shibuyaJP.jpg
        ├── chinatownTH.jpg
        ├── seoulK.jpg
        └── sanfranciscoC.jpg
```

### Uploading pictures on GitHub
1. Open your portfolio repository.
2. Click **Add file → Upload files**.
3. Upload the `assets` folder and its subfolders.
4. Make sure filenames and capitalization exactly match the HTML/CSS.
5. Commit the changes.
6. Refresh the GitHub Pages website.

### Project repository links
In `index.html`, search for `YOUR-USERNAME`. Replace it with your real GitHub username and make sure each repository name matches your actual repository.

Example:
`https://github.com/yourusername/qr-code-attendance-monitoring-system`

If a project has a live/demo deployment, add another link in that project card using its real URL.

## GitHub Pages deployment
1. Create a repository and upload the files.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save and wait for deployment.

No npm, Node.js, PHP server, or database is required for the portfolio itself.
