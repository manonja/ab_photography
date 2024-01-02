import { NextRequest, NextResponse } from "next/server";

// Adding NextRequest prevents caching
export function GET(request: NextRequest) {
    return NextResponse.json([{
        id: 1, 
        title: "Pyrénées", 
        subtitle: null,
        description: "Pyrénées is a photography site for Pyrénées",
        published: true        
    }, {
        id: 2, 
        title: "7Rad", 
        subtitle: null,
        description: "7Rad is a photography site for 7Rad",
        published: true
    }])

}