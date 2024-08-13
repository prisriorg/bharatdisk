import { hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password, referCode} = await req.json();
    const hashedPassword = await hashPassword(password);
    return NextResponse.json({ message: "success" ,hashedPassword, data:{name,email,password,referCode}});
  } catch (e) {
    return NextResponse.json({ message: "failed" });
  }

  
}