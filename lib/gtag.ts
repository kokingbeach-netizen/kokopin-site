declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
