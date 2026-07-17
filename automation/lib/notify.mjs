const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const OWNER_EMAIL = "orlandot@gmail.com";

/**
 * Email the owner about an automation run (used for failures and weekly summaries).
 * Best-effort: logs and returns false when SendGrid is unavailable.
 */
export async function notifyOwner(subject, body) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.warn(`[notify] SENDGRID_API_KEY not set — skipping email "${subject}"`);
    return false;
  }
  try {
    const res = await fetch(SENDGRID_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: OWNER_EMAIL }] }],
        from: { email: "noreply@orlandotgroupinc.com", name: "OTG Automation" },
        subject,
        content: [{ type: "text/plain", value: body }],
      }),
    });
    if (!res.ok) {
      console.warn(`[notify] SendGrid HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
      return false;
    }
    return true;
  } catch (err) {
    console.warn(`[notify] failed to send email: ${err.message}`);
    return false;
  }
}
