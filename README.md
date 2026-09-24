# Md Billal Hossain — GitHub Pages Portfolio

A responsive academic/research portfolio template designed for `https://mdbhossain.github.io`.

## Files

- `index.html` — page structure and SEO metadata
- `styles.css` — complete visual design and responsive layout
- `data.js` — **main content file; edit this for most updates**
- `script.js` — rendering, publication filters, theme toggle, navigation, animations
- `cv.html` — public-safe CV page with print/save-as-PDF support

## Easiest way to update content

Open `data.js`. Sections are already organized for:

- Education
- Research areas
- Selected projects
- Professional experience
- Publications
- Courses
- Professional service
- Technical skills

Add/remove objects from the relevant arrays. You usually do **not** need to edit `styles.css` or `script.js`.

## Add your profile photo

1. Put your photo in the `assets` folder, for example `assets/profile.jpg`.
2. In `data.js`, change:

```js
profileImage: "",
```

to:

```js
profileImage: "assets/profile.jpg",
```

A portrait-oriented photo works best.

## Update the CV

The template uses `cv.html` so you do not accidentally publish a private mailing address or phone number from a full resume. Update the public-safe details in `cv.html`. Visitors can use **Print / Save PDF** from that page.

If you later want a downloadable PDF, put a public-safe file at `assets/Md_Billal_Hossain_CV.pdf` and change the CV links in `index.html` to that path.

## Publish with GitHub Desktop

1. Clone/open the `mdbhossain.github.io` repository in GitHub Desktop.
2. Copy all files from this template into the repository root.
3. Commit the changes, for example: `Add professional portfolio website`.
4. Click **Push origin**.
5. In GitHub: `Settings > Pages` and confirm:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
6. Visit `https://mdbhossain.github.io` after GitHub Pages finishes deployment.

## Notes

- The template includes light/dark themes and remembers the visitor's choice.
- It is responsive for desktop, tablet, and mobile.
- Publication filtering is built in.
- Basic structured data (`Person` JSON-LD), Open Graph metadata, and accessibility helpers are included.
- Replace dates, wording, course names, publications, and CV content as needed.
