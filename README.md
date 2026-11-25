# Darwin Cable Works website

This is a responsive, static website with three pages—Home, Contact and Privacy. Service information is summarized on the homepage. There are no build-time dependencies. Serve the project folder from any static web host; configure the host's not-found route to use `404.html`.

## Deployment status

- The site is in the public GitHub repository [Aayushtiwari115/Darwin-Cable-Works](https://github.com/Aayushtiwari115/Darwin-Cable-Works).
- GitHub Pages project URL: <https://aayushtiwari115.github.io/Darwin-Cable-Works/>.
- Canonical URLs, social preview metadata, `sitemap.xml` and `robots.txt` are configured for that URL and committed to `main`.
- GitHub Pages still needs to be enabled in the repository settings before the public site can be verified.

## Finish publishing

1. In GitHub, open **Settings → Pages** for the repository.
2. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then save.
3. Wait for the Pages deployment to finish, then visit <https://aayushtiwari115.github.io/Darwin-Cable-Works/>.
4. When available, enable **Enforce HTTPS** in the Pages settings.
5. Test the homepage, contact form, mobile layout and not-found page. Confirm the not-found page returns HTTP 404.

## Production checklist

- The hero image and service illustrations in `assets/images/` were supplied for the website. The other photos are illustrative Unsplash images, not photos of Darwin Cable Works jobs. Replace them with approved business photos when available.
- The downloaded photos are used under the [Unsplash License](https://unsplash.com/license).
- Site icons are local SVGs from [Lucide](https://lucide.dev/icons), used under the ISC License.
- The confirmed business phone number (0415 244 056) is linked for direct calls on the contact page and footer. Add a business email address if one becomes available.
- The contact form sends submissions to Web3Forms over HTTPS. Its access key is necessarily present in the public page source; it is not a secret. Restrict its allowed domains to `aayushtiwari115.github.io`, confirm the recipient email and spam controls in the Web3Forms dashboard, and test a real submission. Rotate the key if it is ever misused. Web3Forms' policy says submissions may be retained for up to three years and processed in multiple regions.
- Confirm whether the business is covered by the Privacy Act 1988 and whether any small-business exemption or exception applies. Update the privacy notice if the form recipient or data handling changes.
- Website accessibility has been improved, but no formal WCAG conformance audit has been performed.
- Review `privacy.html` against the Web3Forms account's actual recipient, data handling and retention practices.
- GitHub Pages provides HTTPS but does not support arbitrary response-header configuration for static sites. Use a CDN or reverse proxy if custom security headers are needed.
- The sitemap and `robots.txt` have already been generated and committed. If the site URL changes, update canonical and Open Graph URLs in `index.html`, `contact.html` and `privacy.html`, then regenerate them:

  ```sh
  SITE_URL=https://aayushtiwari115.github.io/Darwin-Cable-Works/ node scripts/generate-sitemap.mjs
  ```

For a custom domain, update the canonical/social URLs and use its HTTPS root as `SITE_URL`. The sitemap script requires HTTPS and a trailing slash, and supports GitHub Pages project-site paths so sitemap entries and the `robots.txt` sitemap reference include the repository path.

After launch, verify the site in Google Search Console and Bing Webmaster Tools and submit `https://aayushtiwari115.github.io/Darwin-Cable-Works/sitemap.xml`. Keep the website name, phone number and service area consistent with the business's public listings. Do not add a street address, opening hours, service guarantees or registration claims to structured data unless verified.
