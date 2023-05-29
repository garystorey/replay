export default function useBeacon(url: string) {
  if (typeof window !== "undefined") {
    navigator.sendBeacon(url);
  }
}
