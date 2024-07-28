
import { NextResponse } from "next/server";
export const runtime = 'edge'; 
import { db } from '../../config/db/config';
import { InsertUser, usersTable} from '../../config/db/schema';
export async function GET(){

    const result = await db.select().from(usersTable).all();
    
    return NextResponse.json(result);
}

export async function POST(){
    return NextResponse.json({
        "hello":"new"
    });
}