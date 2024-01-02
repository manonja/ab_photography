import { NextRequest, NextResponse } from "next/server";

// Adding NextRequest prevents caching
export function GET(request: NextRequest, {params}: {params: {id: string}}) {


    // fetch data from a db
    // if data is not found, we return a 404 error
    // else we return the data
    if (params.id !== "pyrenees") {
        return NextResponse.json({error: "Project not found"}, {status: 404})
    }
 

    return NextResponse.json({ id: 1, 
        title: "Pyrénées", 
        subtitle: null,
        description: "Pyrénées is a photography site for Pyrénées",
        published: true   })

}