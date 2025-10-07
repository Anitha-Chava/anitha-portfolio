// api/send-email.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const safeMessage = String(message);

    // Construct SendGrid email payload
    const payload = {
      personalizations: [
        {
          to: [{ email: process.env.TO_EMAIL }],
          subject: `📩 New message from ${name}`,
          // 👇 This line lets you reply directly to the sender
          reply_to: { email: email, name: name },
        },
      ],
      from: { email: process.env.FROM_EMAIL, name: "Portfolio Contact Form" },
      content: [
        {
          type: "text/plain",
          value: `${safeMessage}\n\nFrom: ${name} <${email}>`,
        },
        {
          type: "text/html",
          value: `
            <h2>New message from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage.replace(/\n/g, "<br>")}</p>
          `,
        },
      ],
    };

    const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (resp.ok) {
      return res.status(200).json({ ok: true, message: "Email sent successfully!" });
    } else {
      const errorText = await resp.text();
      console.error("SendGrid API Error:", resp.status, errorText);
      return res.status(500).json({ error: "Failed to send email.", detail: errorText });
    }
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
