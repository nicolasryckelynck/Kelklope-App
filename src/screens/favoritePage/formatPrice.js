export function formatPrice(price) {
  if (!price) {
    return 0;
  }
  price = price.toString();
  price = price.replace(",", ".");
  if (isNaN(price)) {
    return 0;
  }
  return price;
}
