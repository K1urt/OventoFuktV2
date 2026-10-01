/**
 * SEO
 *
 * Vad den gör:
 * Sätter sidans metadata i <head> via react-helmet-async. Den renderar
 * inget synligt på sidan. Används på ALLA sidor.
 *
 * Vad den ställer in:
 * - <title>: rubriken som visas i flik och Google-resultat
 * - meta description: texten under rubriken i Google (håll ca 140-160 tecken)
 * - canonical: talar om för Google vilken URL som är den "riktiga" för sidan
 * - Open Graph (og:*): styr förhandsvisningen när sidan delas på
 *   LinkedIn, Facebook, Slack m.m. (titel, beskrivning, bild, sajtnamn)
 * - Twitter/X-kort: använder samma titel, beskrivning och bild
 *
 * Props:
 * - title:       Unik titel per sida, t.ex. "Vårt team – Ovento Fukt AB"
 * - description: Unik beskrivning per sida
 * - path:        Sidans route, MÅSTE börja med "/" och matcha routern
 *                exakt, t.ex. "/om-oss". Startsidan är "/" (eller utelämnas).
 * - image:       (valfri) Delningsbild. Antingen en sökväg i /public,
 *                t.ex. "/og-team.jpg", eller en full URL. Om den utelämnas
 *                används DEFAULT_IMAGE.
 * - imageAlt:    (valfri) Beskrivning av bilden för skärmläsare.
 *
 * Exempel:
 *   <SEO
 *     title="Om oss – Ovento Fukt AB"
 *     description="Lär känna Ovento Fukt AB. ..."
 *     path="/om-oss"
 *   />
 *
 *   <SEO
 *     title="Vårt team – Ovento Fukt AB"
 *     description="Möt teamet bakom Ovento Fukt AB. ..."
 *     path="/team"
 *     image="/og-team.jpg"
 *     imageAlt="Teamet på Ovento Fukt AB"
 *   />
 *
 * Att tänka på:
 * - SITE ska vara utan avslutande snedstreck, annars blir det dubbla
 *   snedstreck i canonical-länken.
 * - Delningsbilden ska vara ca 1200×630 px och helst .jpg eller .png.
 *   Alla plattformar läser inte .webp i förhandsvisningar.
 * - Lägg bilden i public/ (t.ex. public/og-image.jpg).
 * - Ny sida? Lägg även till URL:en i public/sitemap.xml.
 * - Kräver att appen är omsluten av <HelmetProvider> (i main.jsx).
 * - Använd samma sorts tankstreck i alla titlar (t.ex. "–").
 * - Efter ändringar kan du testa delningsförhandsvisningen med t.ex.
 *   LinkedIn Post Inspector eller Facebooks Sharing Debugger.
 */

import { Helmet } from "react-helmet-async";

const SITE = "https://www.oventofukt.se";
const SITE_NAME = "Ovento Fukt AB";
const DEFAULT_IMAGE = "/og-image.jpg"; 
const DEFAULT_IMAGE_ALT = "Ovento Fukt AB - fuktmätning och avfuktning";

const SEO = ({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
}) => {
  const url = `${SITE}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

    </Helmet>
  );
};

export default SEO;