import { comments } from "./data"

// Route Handler
// GET Request
export async function GET() {
    return Response.json(comments)
}
// POST Request
export async function POST(request: Request) {
    const comment = await request.json()
    const newcomment = {
        id: comments.length + 1,
        text: comment.text 
    }
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201, // Created
    })
}

