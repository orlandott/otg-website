import { NextResponse } from "next/server";
import { z } from "zod";
import { sendConsultationEmail } from "@/lib/email";

const consultationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultationSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message ?? "Validation failed" },
        { status: 400 }
      );
    }

    await sendConsultationEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/consultation] SendGrid error:", message);
    return NextResponse.json(
      { error: "Failed to send email. Please call us directly at 954-625-5318." },
      { status: 500 }
    );
  }
}
