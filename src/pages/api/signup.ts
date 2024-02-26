import  connectToDatabase  from "@/lib/dbConnect";
import { User } from "@/lib/db";
import { NextResponse } from "next/server";

export default async function POST(request: { json: () => PromiseLike<{ username: any; password: any; balance: any; }> | { username: any; password: any; balance: any; }; }){
    const {username,password,balance}=await request.json();
    await connectToDatabase();
    await User.create({username,password,balance});
    return NextResponse.json({message:"user created"});
}