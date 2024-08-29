import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Log the request body to debug
    console.log('Request Body:', JSON.stringify(req.body, null, 2));

    // Ensure name and phone are captured
    if (!name || !phone) {
      console.log('Validation failed: Name and phone are required');
      res.status(400).json({ status: 'Name and phone are required' });
      return;
    }

    // Configure the transporter with the custom mail server
    const transporter = nodemailer.createTransport({
      host: 'mail.samparkai.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
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
      console.log('Attempting to send email to:', email);
      
      // Send confirmation email to the visitor
      const emailInfo = await transporter.sendMail(visitorMailOptions);
      console.log('Email sent:', emailInfo.response);

      console.log('Connecting to MongoDB');
      await client.connect();
      console.log('Connected to MongoDB');

      const database = client.db('MEANS');
      const visitors = database.collection('Visitor_details');

      console.log('Storing visitor data in MongoDB');
      const result = await visitors.insertOne({ name, email, phone, message, date: new Date() });
      console.log('Data stored in MongoDB with ID:', result.insertedId);

      res.status(200).json({ status: 'Message sent and data stored successfully' });
    } catch (error) {
      console.error('Error occurred:', error.message);
      console.error('Full error details:', error);
      res.status(500).json({ status: 'Failed to send message or store data', error: error.message });
    } finally {
      console.log('Closing MongoDB connection');
      await client.close();
      console.log('MongoDB connection closed');
    }
  } else {
    console.log('Invalid method:', req.method);
    res.status(405).json({ status: 'Method Not Allowed' });
  }
}
