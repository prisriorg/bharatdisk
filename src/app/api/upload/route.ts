import { cookies } from 'next/headers'
export const runtime = 'edge';
export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const cf = await request.json();
  console.log(cf);
 
  return new Response('Hello, Next.js!', {
    status: 200,
    // headers: { 'Set-Cookie': `token=ansh` },
  })
}