export async function POST(req: Request) {
  // Handle requests from Wix Store
  const { query, context } = await req.json()
  
  // Process with your AI logic
  const response = await processAIQuery(query, context)
  
  return new Response(JSON.stringify(response))
}