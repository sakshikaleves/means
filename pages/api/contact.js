import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Log the request body to debug
    console.log('Request Body:', req.body);

    // Ensure name and phone are captured
    if (!name || !phone) {
      res.status(400).json({ status: 'Name and phone are required' });
      return;
    }

    // Configure the transporter with the custom mail server
    const transporter = nodemailer.createTransport({
      host: 'mail.samparkai.com',
      port: 587,
      secure: false,
      auth: {
        user: 'connect@samparkai.com', // connect@samparkai.com
        pass: 'sakshi'  // password for connect@samparkai.com
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configure mail options for the visitor
    const visitorMailOptions = {
      from: 'connect@samparkai.com', // Sender address
      to: email, // Recipient address (visitor's email)
      subject: 'Thank you for contacting us',
      text: `Hi ${name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest regards,\n MEANS Infra \n`
    };

    // MongoDB connection string
    const uri = "mongodb+srv://psitech:Psitech123@pms.ijqbdmu.mongodb.net/MEANS?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      // Send confirmation email to the visitor
      await transporter.sendMail(visitorMailOptions);

      // Store visitor data in MongoDB in the Visitor_details collection
      await client.connect();
      const database = client.db('MEANS');
      const visitors = database.collection('Visitor_details');
      await visitors.insertOne({ name, email, phone, message, date: new Date() });

      res.status(200).json({ status: 'Message sent and data stored successfully' });
    } catch (error) {
      console.error('Failed to send email or store data:', error);
      res.status(500).json({ status: 'Failed to send message or store data' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ status: 'Method Not Allowed' });
  }
}
