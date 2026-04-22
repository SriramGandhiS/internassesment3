import { NextResponse } from "next/server";

// In-memory store for demo (in production, use a database)
let leads = [];

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, company } = body;
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, company" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store the lead
    const lead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        lead: { id: lead.id, name: lead.name, email: lead.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: leads.length,
    leads: leads,
  });
}
