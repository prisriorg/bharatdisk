import { eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectUser, users } from '../schema';

export async function deleteUser(id: SelectUser['id']) {
  await db.delete(users).where(eq(users.id, id));
}