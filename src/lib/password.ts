import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export function generateAccessToken(user: string | object) {
  return jwt.sign(user, process.env.AUTH_SECRET || "mytoken", {
    expiresIn: "8d",
  }); // Short-lived
}

export function generateRefreshToken(user: string | object) {
  return jwt.sign(user, process.env.AUTH_SECRET || "mytoken", {
    expiresIn: "7d",
  }); // Long-lived
}
export async function verifyToken(token: string) {
  return await jwt.verify(token, process.env.AUTH_SECRET || "mytoken"); // Long-lived
}
