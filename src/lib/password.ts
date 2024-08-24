"use server"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export async function generateAccessToken(user: string | object) {
  return await jwt.sign(user, process.env.AUTH_SECRET || "mytoken", {
    expiresIn: "8d",
  }); // Short-lived
}

export async function generateRefreshToken(user: string | object) {
  return await jwt.sign(user, process.env.AUTH_SECRET || "mytoken", {
    expiresIn: "7d",
  }); // Long-lived
}

export async function verifyToken(token: string) {
  return await jwt.verify(token, process.env.AUTH_SECRET || "mytoken"); // Long-lived
}
