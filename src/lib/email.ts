const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";

const RECIPIENTS = ["info@orlandotgroup.com", "orlandot@gmail.com"];
const TEMPLATE_ID = "d-857b4bea478d49288be8b924e78ca41d";

const FROM = {
  email: "noreply@orlandotgroupinc.com",
  name: "Orlando T Group",
};

function requireApiKey(): string {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) throw new Error("Missing environment variable: SENDGRID_API_KEY");
  return apiKey;
}

async function sendTemplateMail(dynamicTemplateData: Record<string, string>) {
  const apiKey = requireApiKey();

  const body = {
    personalizations: [
      {
        to: RECIPIENTS.map((email) => ({ email })),
        dynamic_template_data: dynamicTemplateData,
      },
    ],
    from: FROM,
    template_id: TEMPLATE_ID,
  };

  const res = await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(
      `SendGrid HTTP ${res.status}: ${detail.slice(0, 500)}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ConsultationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
}

// ---------------------------------------------------------------------------
// Senders (fetch-based for Edge / Cloudflare Pages)
// ---------------------------------------------------------------------------

export async function sendConsultationEmail(
  data: ConsultationEmailData,
): Promise<void> {
  await sendTemplateMail({
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone,
    city: data.city,
    message: data.message ?? "",
  });
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  await sendTemplateMail({
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city,
    message: data.message ?? "",
  });
}
