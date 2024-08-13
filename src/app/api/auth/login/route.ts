import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    return NextResponse.json({ status:true, message: "success" });
  } catch (e) {
    return NextResponse.json({  status:false, message: "failed" });
  }
}