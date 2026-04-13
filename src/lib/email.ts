import sgMail, { MailDataRequired } from "@sendgrid/mail";

const RECIPIENTS = ["info@orlandotgroup.com", "orlandot@gmail.com"];
// const RECIPIENTS = ["raimoulik@gmail.com"];
const TEMPLATEID: string = "d-857b4bea478d49288be8b924e78ca41d";

const FROM = {
  email: "noreply@orlandotgroupinc.com",
  name: "Orlando T Group",
};

function getClient(): typeof sgMail {
  const apiKey =
    "process.env.SENDGRID_API_KEY";

  if (!apiKey)
    throw new Error("Missing environment variable: SENDGRID_API_KEY");
  sgMail.setApiKey(apiKey);
  return sgMail;
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
// Senders
// ---------------------------------------------------------------------------

export async function sendConsultationEmail(
  data: ConsultationEmailData,
): Promise<void> {
  const msg: MailDataRequired = {
    from: FROM,
    to: RECIPIENTS,
    templateId: TEMPLATEID,
    dynamicTemplateData: {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message ?? "",
    },
  };

  await getClient().send(msg);
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const msg: MailDataRequired = {
    from: FROM,
    to: RECIPIENTS,
    templateId: TEMPLATEID,
    dynamicTemplateData: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message ?? "",
    },
  };

  await getClient().send(msg);
}
