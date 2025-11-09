// app/api/contact/route.js
import { NextResponse } from "next/server";

/* ===========================
   Validation helper
=========================== */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").toLowerCase());
}
function sanitize(str = "") {
  return String(str).trim().slice(0, 5000);
}

/* ===========================
   OPTION A: Resend
   npm i resend
=========================== */
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

/* ===========================
   OPTION B: Nodemailer (SMTP)
   npm i nodemailer
=========================== */
// import nodemailer from "nodemailer";
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT || 587),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMPP_PASS, // <-- typo? keep correct: SMTP_PASS
//   },
// });

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);

    // Compose contents
    const subject = `New MooMap inquiry from ${cleanName}`;
    const textBody =
`Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMessage}`;

    const htmlBody = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 8px">New MooMap Inquiry</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6f7f9;padding:12px;border-radius:8px;border:1px solid #e5e7eb">${cleanMessage}</pre>
      </div>
    `;

    /* ===========================
       SEND — pick one option
    =========================== */

    // ---------- A) Resend ----------
    // const { data, error } = await resend.emails.send({
    //   from: process.env.CONTACT_FROM,
    //   to: process.env.CONTACT_TO,
    //   subject,
    //   html: htmlBody,
    //   text: textBody,
    //   reply_to: cleanEmail, // so you can reply directly
    // });
    // if (error) {
    //   console.error("Resend error:", error);
    //   return NextResponse.json({ ok: false, error: "Email send failed." }, { status: 500 });
    // }

    // ---------- B) Nodemailer ----------
    // const info = await transporter.sendMail({
    //   from: process.env.CONTACT_FROM,
    //   to: process.env.CONTACT_TO,
    //   subject,
    //   text: textBody,
    //   html: htmlBody,
    //   replyTo: cleanEmail,
    // });

    // For demo purposes (pick one real sender above)
    // Remove this line once you enable Resend or Nodemailer.
    console.log("[demo] message prepared:", { subject, textBody });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
