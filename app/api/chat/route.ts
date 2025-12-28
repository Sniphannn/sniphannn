import { HfInference } from "@huggingface/inference";
import { NextResponse } from "next/server";

const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await hf.chatCompletion({
      // Llama 3.2 is very stable on Hugging Face right now
      model: "meta-llama/Llama-3.2-1B-Instruct", 
      messages: [
        {
          role: "system",
          content: "You are Rohan's AI Assistant. Rohan is a Full Stack Developer (Python, Java, JS, Shopify). I have skills of making custom Shopify stores and integrating AI in applications as well as I have a good command on frontend frameworks like react and next js building seamless application. I am a full stack developer with over 3 years of market experience"
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
    });

    return NextResponse.json({ reply: response.choices[0].message.content });

  } catch (error: any) {
    console.error("HF Error:", error);
    return NextResponse.json({ 
      error: "Hugging Face is busy", 
      details: error.message 
    }, { status: 500 });
  }
}