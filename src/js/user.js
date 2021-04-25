export default function getStatus(characteristics) {
  if (characteristics.health > 50) {
    return "healthy";
  }
  if (characteristics.health <= 50 && characteristics.health >= 15) {
    return "wounded";
  }
  if (characteristics.health < 15) {
    return "critical";
  }
}
