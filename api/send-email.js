// api/send-email.js  (or pages/api/send-email.js)
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Basic sanitization (avoid sending raw HTML from user)
    const safeText = String(message);

    await sendgrid.send({
      to: process.env.TO_EMAIL,            // your receiving email
      from: process.env.FROM_EMAIL,        // verified sender in SendGrid
      subject: `New message from ${name} (website)`,
      text: `${safeText}\n\nFrom: ${name} <${email}>`,
      html: `<p>${safeText.replace(/\n/g, "<br/>")}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SendGrid error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
