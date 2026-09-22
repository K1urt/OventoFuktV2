// Importerar alla .webp-filer i mappen på en gång
const images = import.meta.glob('../assets/employees/*.webp', { eager: true });

const EmployeesImages = {};

for (const path in images) {
  // Plockar ut filnamnet (t.ex. "PANA1243") från sökvägen
  const fileName = path.split('/').pop().replace('.webp', '');
  EmployeesImages[fileName] = images[path].default;
}

export default EmployeesImages;