// Importerar alla .webp-filer i mappen på en gång
const images = import.meta.glob("../assets/icons/footerIcons/*.webp", { eager: true });

const FooterIcons = {};

for (const path in images) {
  // Plockar ut filnamnet från sökvägen
  const fileName = path.split("/").pop().replace(".webp", "");
  FooterIcons[fileName] = images[path].default;
}

export default FooterIcons;
