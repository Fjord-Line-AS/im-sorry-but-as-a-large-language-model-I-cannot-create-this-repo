export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
    var requestText: any = await request.text();

    console.log('requestText: ', requestText);
    
    var requestObject = JSON.parse(requestText);

    return new Response(
        JSON.stringify({
            'text': requestObject.text + ' modified on server side'
        })
    )

}