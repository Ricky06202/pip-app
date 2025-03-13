import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const name = request.nextUrl.searchParams.get("name") as string;
  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(name, request.body!, {
    access: "public",
  });

  //   // Here's the code for Pages API Routes:
  //   // const blob = await put(filename, request, {
  //   //   access: 'public',
  //   // });

  return NextResponse.json(blob.url);
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
