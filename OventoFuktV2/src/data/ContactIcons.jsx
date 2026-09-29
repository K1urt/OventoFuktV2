// Importerar alla .svg-filer i mappen på en gång
const images = import.meta.glob("../assets/icons/contactIcons/*.svg", { eager: true });

const ContactIcons = {};

for (const path in images) {
  // Plockar ut filnamnet från sökvägen
  const fileName = path.split("/").pop().replace(".svg", "");
  ContactIcons[fileName] = images[path].default;
}

export default ContactIcons;