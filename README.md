# Darwin Cable Works website

This is a responsive, static website with three pages—Home, Contact and Privacy. Service information is summarized on the homepage. There are no build-time dependencies. Serve the project folder from any static web host; configure the host's not-found route to use `404.html`.

## Before launch

- **GitHub Pages URL prepared:** `https://aayushtiwari115.github.io/Darwin-Cable-Works/`. Canonical and social preview URLs are configured for this project URL. If the account, repository name, or domain changes, update them before launch.
- **Enable GitHub Pages.** In the repository settings, go to **Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, and save. Wait for the deployment to complete before checking the live site.
- **Configure the hosting platform.** GitHub Pages provides HTTPS; enable **Enforce HTTPS** after the certificate is ready. GitHub Pages does not provide arbitrary response-header configuration for a static site, so use a CDN/reverse proxy if custom security headers are required. Confirm `404.html` is served with an HTTP 404 status.
- The hero image and service illustrations in `assets/images/` were supplied for the website. The other photos are illustrative Unsplash images, not photos of Darwin Cable Works jobs. Replace them with approved business photos when available.
- The downloaded photos are used under the [Unsplash License](https://unsplash.com/license).
- Site icons are local SVGs from [Lucide](https://lucide.dev/icons), used under the ISC License.
- The confirmed business phone number (0415 244 056) is linked for direct calls on the contact page and footer. Add a business email address if one becomes available.
- The contact form sends submissions to Web3Forms over HTTPS. Its access key is necessarily present in the public page source; it is not a secret. Restrict its allowed domains to the production hostname, confirm the recipient email and spam controls in the Web3Forms dashboard, and rotate the key if it is ever misused. Web3Forms' policy says submissions may be retained for up to three years and processed in multiple regions.
- Confirm whether the business is covered by the Privacy Act 1988 and whether any small-business exemption or exception applies. Update the privacy notice if the form recipient or data handling changes.
- Website accessibility has been improved, but no formal WCAG conformance audit has been performed.
- Review `privacy.html` against the selected host and Web3Forms account's actual data handling and retention practices.
- Generate the GitHub Pages sitemap and `robots.txt`:

  ```sh
  SITE_URL=https://aayushtiwari115.github.io/Darwin-Cable-Works/ node scripts/generate-sitemap.mjs
  ```

For a custom domain, update canonical/social URLs and use that HTTPS root instead. The sitemap script requires HTTPS and a trailing slash, and supports GitHub Pages project-site paths so sitemap entries and the robots.txt sitemap reference include the repository path.

After launch, verify the site in Google Search Console and Bing Webmaster Tools, submit the generated sitemap, and keep the website name, phone number and service area consistent with the business's public listings. Do not add a street address, opening hours, service guarantees or registration claims to structured data unless verified.
