import { NextResponse } from "next/server";
import { generatePitchReport } from "@/lib/ai/pitchReport";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pitch, personaResponses, assetType, audience } = body;

    if (!pitch || !personaResponses || !Array.isArray(personaResponses) || !assetType || !audience) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const report = await generatePitchReport(pitch, personaResponses, assetType, audience);

    return NextResponse.json(report);
  } catch (error: any) {
    console.error("Report API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
