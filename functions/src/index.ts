import { onRequest } from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "ammarnaqvi8@yahoo.co.uk",
    pass: "estnkfqojqyzrbpb",
  },
});

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  treatments: string[];
}

// Define the Cloud Function
export const sendBookingEmail = onRequest(
  {
    region: 'us-central1',
    memory: '256MiB',
    maxInstances: 10,
    timeoutSeconds: 60,
    cors: [
      "https://laser-eb7a0.web.app",
      "https://laser-eb7a0.firebaseapp.com",
      "http://localhost:3000",
      "https://sendbookingemail-ic5jdcj5sa-uc.a.run.app"
    ],
    invoker: 'public'  // Allow unauthenticated access
  }, 
  async (request, response) => {
    // Enable CORS
    const origin = request.headers.origin;
    if (origin) {
      response.set('Access-Control-Allow-Origin', origin);
    }
    response.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Max-Age', '3600');

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      response.status(204).send('');
      return;
    }

    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed');
      return;
    }

    try {
      const { firstName, lastName, email, phone, preferredDate, preferredTime, message, treatments } = request.body as BookingRequest;

      // Log the parsed data
      console.log('Parsed request data:', {
        firstName,
        lastName,
        email,
        phone,
        preferredDate,
        preferredTime,
        treatments
      });

      // Validate request data
      if (!firstName || !email || !preferredDate || !preferredTime || !treatments) {
        console.log('Missing required fields');
        response.status(400).json({
          success: false,
          message: "Missing required fields."
        });
        return;
      }

      // Format the date and time
      const formattedDate = new Date(preferredDate).toLocaleDateString();
      const formattedTime = preferredTime;

      // Email content
      const mailOptions = {
        from: '"Laser Clinic Booking" <ammarnaqvi8@yahoo.co.uk>',
        to: "ammarnaqvi8@yahoo.co.uk",
        subject: "New Booking Request",
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Date:</strong> ${formattedDate}</p>
          <p><strong>Preferred Time:</strong> ${formattedTime}</p>
          <p><strong>Treatments:</strong> ${treatments.join(", ")}</p>
          <p><strong>Message:</strong> ${message || "No additional notes provided."}</p>
        `,
      };

      // Send email
      console.log('Attempting to send email...');
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      response.status(200).json({ 
        success: true, 
        message: "Booking request sent successfully." 
      });
    } catch (error) {
      console.error("Error sending email:", error);
      response.status(500).json({ 
        success: false, 
        message: "Failed to send booking request. Please try again later." 
      });
    }
});
