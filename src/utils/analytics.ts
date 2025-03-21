// Google Analytics configuration
// Replace GA_MEASUREMENT_ID with your actual Google Analytics measurement ID in production

// Initialize Google Analytics
export const initGA = () => {
  // Check if window and document are defined (for SSR compatibility)
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Check if analytics is already initialized
  if ((window as any).GA_INITIALIZED) return;

  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID);

  (window as any).GA_INITIALIZED = true;
};

// Track page views
export const pageview = (path: string) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  (window as any).gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}; 