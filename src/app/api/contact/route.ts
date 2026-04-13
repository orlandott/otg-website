import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

export const runtime = "edge";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message ?? "Validation failed" },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/contact] SendGrid error:", message);
    return NextResponse.json(
      { error: "Failed to send email. Please call us directly at 954-625-5318." },
      { status: 500 }
    );
  }
}
