const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email:", error);
  } else {
    console.log("Ready to send emails");
  }
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    const name = `${firstName} ${lastName}`;
    const mail = {
      from: name,
      to: process.env.EMAIL_USER, // Use your Gmail address from the environment variable
      subject: "Contact Form Submission - Terryfolio",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await contactEmail.sendMail(mail);
      return res.status(200).json({ code: 200, status: "Message Sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ code: 500, error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
