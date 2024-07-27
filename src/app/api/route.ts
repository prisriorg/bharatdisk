import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        "hello":"new"
    });
}

export async function POST(){
    return NextResponse.json({
        "hello":"new"
    });
}