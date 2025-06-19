import { NextRequest, NextResponse } from "next/server";
import links from '@/data/links.json';

export async function GET(req: NextRequest) {
    const link = req.nextUrl.pathname.split("/").pop();
    
    if (link && links[link as keyof typeof links]) {
        return NextResponse.redirect(links[link as keyof typeof links]);
    }
    
    return NextResponse.json({ "message": "Not found" });
}
