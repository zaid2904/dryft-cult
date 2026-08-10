import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DRYFT CULT",
    "url": "https://dryftcult.in",
    "logo": "https://dryftcult.in/icon.png",
    "description": "Premium streetwear clothing brand engineered in India with minimalist, brutalist silhouettes.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://instagram.com/dryftcult"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  images,
  price,
  sku,
  url,
}: {
  name: string;
  description: string;
  images: string[];
  price: number;
  sku: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": images,
    "description": description,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": "DRYFT CULT"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "INR",
      "price": price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "DRYFT CULT"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
