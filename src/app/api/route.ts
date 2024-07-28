
"use server"

import { NextResponse } from "next/server";

import { InsertUser, usersTable} from '@/config/db/schema';
import { db } from "@/config/db/config";

export async function GET(){

    const result = await db.select().from(usersTable).all();
    
    return NextResponse.json(result);
}

export async function POST(){
    return NextResponse.json({
        "hello":"new"
    });
}