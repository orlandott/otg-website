import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
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

    const { name, email, phone, message } = parsed.data;

    // Log submission (replace with your email service integration)
    // See README.md for Resend / Nodemailer setup instructions
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message: message ?? "(none)",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
