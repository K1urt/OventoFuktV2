/**
 * LocalBusinessSchema
 *
 * Vad den gör:
 * Lägger in strukturerad data (JSON-LD, schema.org) i sidans <head> via
 * react-helmet-async. Den renderar inget synligt på sidan.
 *
 * Varför:
 * Google och andra sökmotorer läser datan för att förstå vilket företag
 * sajten tillhör: namn, adress, telefon, öppettider, verksamhetsområde och
 * tjänster. Det kan ge bättre lokal sökträff och en rikare visning i
 * sökresultatet (t.ex. i Google Maps och Knowledge Panel).
 *
 * Var den används:
 * Endast på startsidan (Home) och kontaktsidan (Contact), t.ex.
 *   <LocalBusinessSchema />
 * Den behövs inte på övriga sidor.
 *
 * Att tänka på när något ändras:
 * - Uppgifterna (telefon, adress, öppettider, tjänster) ska alltid stämma
 *   med det som står på sajten och i Google Business Profile.
 * - Ny tjänst? Lägg till namnet i listan i `makesOffer`.
 * - Nytt verksamhetsområde? Uppdatera `areaServed`.
 * - Verifiera efter ändringar med Googles Rich Results Test:
 *   https://search.google.com/test/rich-results
 */
import { Helmet } from "react-helmet-async";

const SITE = "https://www.oventofukt.se/";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ovento Fukt AB",
    url: SITE,
    telephone: "+468333801",
    email: "kontakt@oventofukt.se",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gullmarsvägen 48A",
      postalCode: "120 39", 
      addressLocality: "Stockholm", 
      addressCountry: "SE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "16:30",
      },
    ],
    areaServed: "Stockholm", 
    makesOffer: [
      "Fuktmätning",
      "Avfuktning",
      "Utredningar",
      "Mikrobiell provtagning",
      "Statusbesiktning av badrum och kök",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;