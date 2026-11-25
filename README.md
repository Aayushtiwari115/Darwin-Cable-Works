# Darwin Cable Works website

This is a responsive, static website with three pages—Home, Contact and Privacy. Service information is summarized on the homepage. There are no build-time dependencies. Serve the project folder from any static web host; configure the host's not-found route to use `404.html`.

## Before launch

- **Confirm and use the public domain.** Canonical URLs are intentionally not generated until the final HTTPS domain is known; this avoids indexing preview or local-host URLs. After confirmation, add canonical and `og:url` metadata on the indexable pages, add an absolute social preview image URL, then run the sitemap script below.
- **Configure the hosting platform.** Force HTTPS, redirect HTTP and duplicate hostnames to one preferred HTTPS hostname, and configure security headers at the host/CDN (at minimum HSTS after HTTPS is verified, `X-Content-Type-Options`, `Referrer-Policy`, a restrictive `Permissions-Policy`, and a tested Content Security Policy). Confirm `404.html` is served with an HTTP 404 status.
- The hero image and service illustrations in `assets/images/` were supplied for the website. The other photos are illustrative Unsplash images, not photos of Darwin Cable Works jobs. Replace them with approved business photos when available.
- The downloaded photos are used under the [Unsplash License](https://unsplash.com/license).
- Site icons are local SVGs from [Lucide](https://lucide.dev/icons), used under the ISC License.
- The confirmed business phone number (0415 244 056) is linked for direct calls on the contact page and footer. Add a business email address if one becomes available.
- The contact form sends submissions to Web3Forms over HTTPS. Its access key is necessarily present in the public page source; it is not a secret. Restrict its allowed domains to the production hostname, confirm the recipient email and spam controls in the Web3Forms dashboard, and rotate the key if it is ever misused. Web3Forms' policy says submissions may be retained for up to three years and processed in multiple regions.
- Confirm whether the business is covered by the Privacy Act 1988 and whether any small-business exemption or exception applies. Update the privacy notice if the form recipient or data handling changes.
- Website accessibility has been improved, but no formal WCAG conformance audit has been performed.
- Review `privacy.html` against the selected host and Web3Forms account's actual data handling and retention practices.
- Add the confirmed domain's canonical/social metadata, then generate the domain-specific sitemap and `robots.txt` after the public HTTPS domain is confirmed:

  ```sh
  SITE_URL=https://www.your-confirmed-domain.example/ node scripts/generate-sitemap.mjs
  ```

The script rejects non-HTTPS and non-origin URLs so the generated sitemap and `robots.txt` use the confirmed canonical domain. The current `robots.txt` allows crawling but does not yet include a sitemap URL.

After launch, verify the site in Google Search Console and Bing Webmaster Tools, submit the generated sitemap, and keep the website name, phone number and service area consistent with the business's public listings. Do not add a street address, opening hours, service guarantees or registration claims to structured data unless verified.
