export const unique = (arr: any[] = [], key: string): any[] => {
  if (arr.length === 0) return arr;
  const d = arr.map((c) => c[key]);
  if (d.length === 0) return arr;
  const updated = Array.from(new Set([...d]));
  return updated;
};
