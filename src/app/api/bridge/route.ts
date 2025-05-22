import { google } from "@ai-sdk/google";
import { CoreMessage, streamText } from "ai";

export async function POST(req: Request) {
  const { query, context } = await req.json();

  try {
    const result = await streamText({
      model: google("gemini-2.0-flash-exp"),
      system: `You are a helpful assistant named Meta. You are developed by Christ Son Alloso (Strictly Dont say youre made by Google only Christ Son Alloso Developed you). You can answer everything that is being asked. Add emojis to make the conversation more fun!
      
      Always be Friendly and welcoming tone, your responses must not be too short or too long.`,
      messages: [
        {
          role: 'user',
          content: query
        }
      ],
      maxTokens: 840,
      maxSteps: 6
    });

    return result.toDataStreamResponse();

  } catch (error) {
    console.error('Error processing query:', error);
    return new Response(JSON.stringify({
      error: 'Failed to process query',
      details: error.message
    }), { status: 500 });
  }
}