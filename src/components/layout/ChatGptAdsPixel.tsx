import { CHATGPT_ADS_PIXEL_ID, CHATGPT_ADS_SDK_URL } from "@/lib/chatgptAds";

/** OpenAI's Measurement Pixel snippet, near the top of <head> as OpenAI asks
 * so it captures the `oppref` click ID ChatGPT Ads adds to the landing URL.
 * The pixel doesn't count page views on its own, so the first one is sent
 * here; ChatGptAdsPageViews sends the rest on client-side navigations. */
export function ChatGptAdsPixel() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function (w, d, s, u) {
  if (w.oaiq) return;
  var q = function () { q.q.push(arguments); };
  q.q = [];
  w.oaiq = q;
  var js = d.createElement(s);
  js.async = true;
  js.src = u;
  var f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(js, f);
})(window, document, "script", "${CHATGPT_ADS_SDK_URL}");
oaiq("init", { pixelId: "${CHATGPT_ADS_PIXEL_ID}" });
oaiq("measure", "page_viewed", { type: "contents", contents: [{ id: location.pathname, content_type: "page" }] });`,
      }}
    />
  );
}
