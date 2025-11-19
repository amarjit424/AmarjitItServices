import { NextResponse } from "next/server";
import Contact from "@/models/contact.model";
import connectDB from "@/lib/connectdb"

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    // Basic validation
    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newContact = await Contact.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message submitted successfully!",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
