const SITE_URL = "https://victor-codes.netlify.app";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Victor Codes",
    url: SITE_URL,
    jobTitle: "Web Developer",
    description:
      "Web developer specializing in modern responsive websites, React applications and full-stack web development.",
    knowsAbout: [
      "React",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "Responsive Web Design",
      "Full-Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}