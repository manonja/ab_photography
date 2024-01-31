import { NextRequest, NextResponse } from "next/server";

// Adding NextRequest prevents caching
export function GET(request: NextRequest, {params}: {params: {id: string}}) {

    if (params.id !== "pyrenees") {
        return NextResponse.json({error: "Project not found"}, {status: 404})
    }
 

    return NextResponse.json({status: 200})

}