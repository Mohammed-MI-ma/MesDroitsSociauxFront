import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const hostname = "https://weconnectmaroc.com";
const languages = ["fr", "ar"];

const baseUrls = [
  "/:lang",
  "/:lang/votre-simulateur/accueil",
  "/:lang/votre-simulateur/accueil/Preparez_vos_infos",
  "/:lang/votre-simulateur/simu-foyer",
  "/:lang/droits-sociaux/Vosservices",
  "/:lang/maroc-connect/connexion",
];

// Create all routes
const routes = baseUrls.flatMap((path) =>
  languages.map((lang) => ({
    url: hostname + path.replace(":lang", lang),
    changefreq: "weekly",
    priority: path === "/:lang" ? 1.0 : 0.8,
  }))
);

// Convert array to stream
const stream = new SitemapStream({ hostname });
const xml = await streamToPromise(Readable.from(routes).pipe(stream)).then(
  (data) => data.toString()
);

// Save sitemap
createWriteStream("./public/sitemap.xml").write(xml);
console.log("✅ Sitemap generated in /public/sitemap.xml");
