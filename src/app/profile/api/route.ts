import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export async function GET(req: NextRequest) {
    // Header in Route Handler
    const requestHeaders = new Headers(req.headers)
    const headerList = headers()
    // Cookies in Route Handler
    const theme = req.cookies.get("theme")

    cookies().set("resultsPerPage", "20")

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))

    console.log(theme)
    console.log(cookies().get("resultsPerPage"))

    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}