import { useEffect } from "react";

const SITE_URL = "https://victor-codes.netlify.app";

const SITE_NAME = "Victor Codes";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Web Developer`;

  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);

    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("og:url", canonicalUrl);
    setProperty("og:site_name", SITE_NAME);
    setProperty("og:image", image);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, canonicalUrl, image]);

  return null;
}