import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const senderName = formData.get("senderName") as string;
    const fromEmail = formData.get("fromEmail") as string;
    const subject = formData.get("subject") as string;
    const userMessage = formData.get("message") as string;
    const photo = formData.get("photo") as File | null;

    // Aapka customized message format
    const formattedMessage = `
Hi, I am ${senderName}. 
This is my email: ${fromEmail}

${userMessage}

    `;

    const attachments = [];
    if (photo && photo.size > 0) {
      const buffer = Buffer.from(await photo.arrayBuffer());
      attachments.push({ filename: photo.name, content: buffer });
    }

    const { data, error } = await resend.emails.send({
      from: `${senderName} <onboarding@resend.dev>`, // Inbox mein naam show hoga
      to: "rohanadnan007@gmail.com",
      replyTo: fromEmail,
      subject: `[Contact Form] ${subject}`, // Subject ko thora identify-able banaya
      text: formattedMessage, // Yahan humne naya format use kiya hai
      attachments: attachments,
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
