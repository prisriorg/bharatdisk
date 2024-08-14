import { eq } from 'drizzle-orm';
import { db } from '..';
import { InsertUser, users } from '../schema';

export async function createUser(data: InsertUser) {
  return await db.insert(users).values(data);
} 

export async function userExists(email:string) {
  return (await db.select().from(users).where(eq(users.email,email))).at(0);
} 