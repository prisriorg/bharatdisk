import { asc, count, eq, getTableColumns, gt, sql } from "drizzle-orm";
import { db } from "../index";
import { files, SelectUser, users } from "../schema";

export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.email, email));
}

export async function getUserById(id: number) {
  return db.select().from(users).where(eq(users.id, id));
}
export async function getUserWithCount(page = 1, pageSize = 5) {
  return db
    .select()
    .from(users)
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}
export async function changePassword(id: number, password: string) {
  return db.update(users).set({ password }).where(eq(users.id, id));
}

export async function getFileById(id: number) {
  return db.select().from(files).where(eq(files.id, id));
}
export async function getFileWithCount(
  userId: number,
  page: number = 1,
  pageSize: number = 5
) {
  return db
    .select()
    .from(files)
    .where(eq(files.userId,userId))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}




















// export async function getUsersWithPostsCount(
//   page = 1,
//   pageSize = 5,
// ): Promise<
//   Array<{
//     postsCount: number;
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }>
// > {
//   return db
//     .select({
//       ...getTableColumns(usersTable),
//       postsCount: count(postsTable.id),
//     })
//     .from(usersTable)
//     .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
//     .groupBy(usersTable.id)
//     .orderBy(asc(usersTable.id))
//     .limit(pageSize)
//     .offset((page - 1) * pageSize);
// }

// export async function getPostsForLast24Hours(
//   page = 1,
//   pageSize = 5,
// ): Promise<
//   Array<{
//     id: number;
//     title: string;
//   }>
// > {
//   return db
//     .select({
//       id: postsTable.id,
//       title: postsTable.title,
//     })
//     .from(postsTable)
//     .where(gt(postsTable.createdAt, sql`(datetime('now','-24 hour'))`))
//     .orderBy(asc(postsTable.title), asc(postsTable.id))
//     .limit(pageSize)
//     .offset((page - 1) * pageSize);
// }
