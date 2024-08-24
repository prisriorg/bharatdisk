import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import generateUniqueRandomString from "@/lib/helpers";
export async function POST(req:NextRequest): Promise<NextResponse>{
    try {
        const id = generateUniqueRandomString(16);
        const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP';
        const clientIp = ip.split(',')[0].trim();
        const response = await fetch(`http://ip-api.com/json/${clientIp}?fields=proxy,hosting`);
        if (!response.ok) {
            throw new Error('Failed to fetch IP details');
        }

    const ipDetails = await response.json();
        const data = await req.json();
        // const result = await db.select().from(usersTable).where(sql`${usersTable.name} = ${data.name}`);
        // Responding with the received data
        return NextResponse.json(id);
    } catch (error) {
        console.log('Age:', error);
        // Handle errors if JSON parsing fails
        return NextResponse.json({ error}, { status: 400 });
    }
    // const users = req.url.search('hello')
    // const result = await db.select().from(usersTable).where(sql``);
}