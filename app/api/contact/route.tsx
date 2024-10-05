// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the POST handler
export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the Nodemailer transport service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com", // Replace with your SMTP host
      port: 587, // Typically 587 for TLS or 465 for SSL
      secure: false, // Use true for SSL
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username (email)
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    // Email message
    const mailOptions = {
      from: email, // Sender's email
      to: "iheblazhary@gmail.com", // Your receiving email
      subject: `New contact message from ${firstName} ${lastName}`,
      text: `You have a new message from ${firstName} ${lastName} (${email} - ${phone}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
