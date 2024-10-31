const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: "http://localhost:3000",  // Allow frontend on port 3000
  methods: ["POST", "GET"],         // Specify allowed methods
  credentials: true,                // Allow credentials if needed
}));

// Middleware to parse JSON requests
app.use(express.json());
app.use("/", router);

// Start server on port 5000
app.listen(5000, () => console.log("Server Running on port 5000"));

// Email configuration
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "hirwa.terry@gmail.com",  // Your Gmail address
    pass: "vffb zwrs azdm faoa",     // Your app password
  },
});

// Verify the email transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying email:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Define the /contact route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: "hirwa.terry@gmail.com",  // Your Gmail address
    subject: "Contact Form Submission - Terryfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email using the transporter
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, error: "Failed to send email" });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});
