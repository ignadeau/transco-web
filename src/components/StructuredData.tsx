export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Constructora Cumbres",
    "image": "https://cumbreschile.cl/logo.png", // Placeholder
    "@id": "https://cumbreschile.cl",
    "url": "https://cumbreschile.cl",
    "telephone": "+56940265446",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Camino Padre Hurtado #19498",
      "addressLocality": "San Bernardo",
      "addressRegion": "RM",
      "postalCode": "8050000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.645, // Approximation
      "longitude": -70.718
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.linkedin.com/company/constructora-cumbres" // Placeholder
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
