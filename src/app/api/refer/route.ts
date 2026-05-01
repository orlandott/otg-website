import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

export const runtime = "edge";

const schema = z.object({
  friendName: z.string().min(2),
  friendPhone: z.string().min(10),
  yourName: z.string().min(2),
  yourEmail: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    const { friendName, friendPhone, yourName, yourEmail } = parsed.data;

    await sendContactEmail({
      name: yourName,
      email: yourEmail,
      phone: friendPhone,
      city: "Referral",
      message: `REFERRAL SUBMISSION — ${yourName} is referring ${friendName} (phone: ${friendPhone}) for a free consultation.`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/refer] Error:", message);
    return NextResponse.json(
      { error: "Failed to send. Please call us at 954-625-5318." },
      { status: 500 }
    );
  }
}
