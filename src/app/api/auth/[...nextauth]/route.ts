import NextAuth from 'next-auth'
export const runtime = 'edge';
import { options } from './options';
const handler = NextAuth(options)

export { handler as GET, handler as POST }