# Afoto Pictures Portfolio App

A mobile-friendly photography portfolio website/PWA designed for GitHub Pages.

## Quick setup on GitHub (no coding software needed)

1. Sign in at https://github.com
2. Create a **Public** repository named `afoto-pictures`.
3. Open the repository, click **Add file → Upload files**.
4. Extract this ZIP on your computer, then upload all the files and folders inside `afoto-pictures-app` (not the ZIP itself).
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then Save.
9. Wait a minute or two. GitHub will show your website URL, usually:
   `https://YOUR-USERNAME.github.io/afoto-pictures/`

## Add your own photos

1. In the repository, click **Add file → Create new file**.
2. Name the file `images/.gitkeep` and commit. (This creates the images folder.)
3. Upload your own photos into the `images` folder using **Add file → Upload files**.
4. Open `gallery.js` and click the pencil (Edit).
5. Replace the sample `src` image URLs with your own file paths. Example:

   `src: "images/my-portrait.jpg"`

6. Change the title and category too, for example:

   `{title:"My Portrait", category:"Portraits", src:"images/my-portrait.jpg"}`

7. Commit changes. Your live app updates after GitHub Pages redeploys.

## Personalize booking/contact

Edit `gallery.js` near the bottom:
- `whatsappNumber`: your WhatsApp number with country code, digits only. Malawi example format: `265XXXXXXXXX` (no `+`).
- `instagramUrl`: your actual Instagram profile URL.
- `facebookUrl`: your actual Facebook page URL.

Edit `index.html` to update your biography and name.

## Install it on Android

Open your GitHub Pages URL in Chrome on Android → menu (⋮) → **Add to Home screen** or **Install app**.

## Notes
- This is a website/PWA, not a Play Store APK. It works on Android and desktop, and can be installed from Chrome.
- Sample gallery photos are remote demo images. Replace them with photos you own or have permission to use.
- GitHub repository size is limited; resize/compress images for web (typically around 150–500 KB each) before uploading.
