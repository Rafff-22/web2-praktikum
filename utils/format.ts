export function formatList<T>(items: T[], toLabel: (item: T) => string): string {
  return items.map(toLabel).join(", ");
}

export function sum<T>(items: T[], getValue: (item: T) => number): number {
  return items.reduce((total, item) => total + getValue(item), 0);
}