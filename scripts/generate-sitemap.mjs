import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const siteUrl = process.env.SITE_URL;
if (!siteUrl) {
  throw new Error("Set SITE_URL to the confirmed public HTTPS domain before generating the sitemap.");
}

const parsedUrl = new URL(siteUrl);
if (parsedUrl.protocol !== "https:" || parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error("SITE_URL must be the site's HTTPS origin, for example https://www.example.com/");
}

const pages = [
  "",
  "contact.html",
  "privacy.html",
];

const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
const urls = pages.map((page) => `  <url><loc>${escapeXml(new URL(page, parsedUrl).href)}</loc></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", parsedUrl).href}\n`;
const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));

await Promise.all([
  writeFile(join(projectRoot, "sitemap.xml"), sitemap, "utf8"),
  writeFile(join(projectRoot, "robots.txt"), robots, "utf8"),
]);

console.log(`Generated sitemap.xml and robots.txt for ${parsedUrl.origin}`);
