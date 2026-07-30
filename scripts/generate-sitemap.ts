// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://cashom.org"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/thc-servepro", changefreq: "monthly", priority: "0.9" },
  { path: "/thc-servesmart", changefreq: "monthly", priority: "0.7" },
  { path: "/cannabis-hospitality-certification", changefreq: "monthly", priority: "0.9" },
  { path: "/cannabis-activator-certification", changefreq: "monthly", priority: "0.8" },
  { path: "/cashom-initiation", changefreq: "monthly", priority: "0.8" },
  { path: "/team", changefreq: "monthly", priority: "0.6" },
  { path: "/signup", changefreq: "monthly", priority: "0.5" },
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
