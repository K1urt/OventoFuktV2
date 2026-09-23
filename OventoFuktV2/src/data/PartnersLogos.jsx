// Importerar alla .webp-filer i mappen på en gång
const images = import.meta.glob("../assets/partners/*.webp", { eager: true });

const PartnersLogos = {};

for (const path in images) {
  // Plockar ut filnamnet från sökvägen
  const fileName = path.split("/").pop().replace(".webp", "");
  PartnersLogos[fileName] = images[path].default;
}

export default PartnersLogos;
