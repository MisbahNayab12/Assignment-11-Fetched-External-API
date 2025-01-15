import { NextResponse } from "next/server";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

export const GET = async () => {
    try {
        const response = await fetch(API_ENDPOINT)

        if (!response.ok) {
            return NextResponse.json({ success: false }, { status: 501 })
        }

        const data = await response.json()

        console.log(data)

        return NextResponse.json({ data: data }, { status: 200 })
    } catch (error: unknown) {
        return NextResponse.json(
            { success: false, message: "received an error",  error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 }
        )
    }
}