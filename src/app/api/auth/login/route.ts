import { getUserByEmail } from "@/db/queries/select";
import { comparePassword, generateAccessToken } from "@/lib/password";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }
    const user = (await getUserByEmail(email)).at(0);
    if (!user) {
      return NextResponse.json({ message: "User Not Found" }, { status: 400 });
    }
    const isValidPassword = await comparePassword(password, user.password);
    if (isValidPassword) {
      const accessToken = generateAccessToken({
        email,
        password
      });
      return NextResponse.json(
        { message: "Login Successfull" ,accessToken},
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "Login Failed" }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ message: "failed" }, { status: 400 });
  }
}
