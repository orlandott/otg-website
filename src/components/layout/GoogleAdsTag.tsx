import { GOOGLE_ADS_ID } from "@/lib/googleAds";

/** Google's gtag.js snippet for the Ads account, as plain tags in <head> the
 * way Google gives it: its tag check reads the page's HTML, which a
 * next/script tag (injected after hydration) doesn't appear in. */
export function GoogleAdsTag() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`,
        }}
      />
    </>
  );
}
