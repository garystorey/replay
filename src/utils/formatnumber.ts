export function formatNumber(number: number) {
  return new Intl.NumberFormat("en-US", { style: "decimal" }).format(number);
}
