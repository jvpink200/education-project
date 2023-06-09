export default function Footer() {
  let date = new Date();
  const fullYear = date.getFullYear();
  return <>&copy;{fullYear}</>;
}
