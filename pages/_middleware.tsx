import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest & NextApiRequest){
    const url = req.nextUrl.clone();
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    if(!req.url.includes("/protected"))
    {
        if(!req.url.includes("/signin") || !req.url.includes("/register")) return NextResponse.next();
        if(session)
        {
           url.pathname = "/protected";
           return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    if (!session)
    {
        url.pathname = "/signin";
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}