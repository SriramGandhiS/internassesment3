import { NextResponse } from "next/server";

// Mock database (in-memory for demo purposes)
let leads = [];

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, phone, interest } = body;

    // Simple validation
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Save lead
    const newLead = {
      id: Date.now(),
      name,
      email,
      company,
      phone,
      interest,
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    console.log("New lead captured:", newLead);

    return NextResponse.json({ message: "Lead captured successfully", lead: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ leads });
}
