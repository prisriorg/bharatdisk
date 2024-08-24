import { createUser, userExists } from "@/db/queries/insert";
import generateUniqueRandomString from "@/lib/helpers";
import { generateAccessToken, hashPassword } from "@/lib/password";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password, referCode } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }
    const exists = await userExists(email);
    if (exists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
   
    const apiKey = generateUniqueRandomString(32);
    const user = await createUser({
      name,
      email,
      password: hashedPassword,
      referCode,
      apiKey
    });
    
    if (user) {
      const accessToken = generateAccessToken({
        email,
        password
      });
      return NextResponse.json(
        {
          message: "success",
          accessToken
        },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "failed"}, { status: 400 });
  } catch (e) {
    console.log(e)
    return NextResponse.json({ message: "failed",e }, { status: 400 });
  }
}
