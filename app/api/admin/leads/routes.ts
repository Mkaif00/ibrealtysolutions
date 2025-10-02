import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse.json({
        success:true,
        message: 'Lead recieved succesfully'
    });
}

export async function GET(){
    return NextResponse.json({
        message: 'Leads API is active'
    });
}