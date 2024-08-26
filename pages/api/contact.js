// // pages/api/contact.js
// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { name, email, message } = req.body;
  
//       // Here, you can integrate with an email service or database
//       // For this example, we'll just console.log the data
  
//       console.log('Received message from:', name, email, message);
  
//       // Optionally, you can send the data to an email service, like SendGrid or NodeMailer
//       // Example:
//       // await sendEmail(name, email, message);
  
//       res.status(200).json({ status: 'Message sent successfully' });
//     } else {
//       res.status(405).json({ status: 'Method Not Allowed' });
//     }
//   }
  

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the transporter with the custom mail server
    const transporter = nodemailer.createTransport({
      host: 'mail.samparkai.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email account (likely an admin or service account)
        pass: process.env.EMAIL_PASS  // your email password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configure mail options
    const mailOptions = {
      from: email, // Use the visitor's email as the sender
      to: 'your-email@example.com', // The email where you want to receive the message
      subject: `New message from ${name}`,
      text: message,
    };

    // Try to send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'Message sent successfully' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ status: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ status: 'Method Not Allowed' });
  }
}
