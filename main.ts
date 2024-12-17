import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "npm:@aws-sdk/client-bedrock-runtime";
import { type Conversation } from "./types.ts";
import { getSummaryPrompt } from "./prompts.ts";

const client = new BedrockRuntimeClient();

async function generateSummary(username: string, conversation: Conversation) {
  const demoPrompt = getSummaryPrompt(username, conversation);
  const command = new ConverseCommand({
    modelId: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
    messages: [{ role: "user", content: [{ text: demoPrompt }] }],
    inferenceConfig: {
      temperature: 0,
      maxTokens: 2048,
    },
  });

  const response = await client.send(command);
  const summary = response.output?.message?.content?.[0]?.text;
  return summary;
}

(async () => {
  const username = "Joey JoJo Junior Shabadou";
  const conversation: Conversation = [
    { role: "assistant", content: "What is the meaning of life?" },
    { role: "user", content: "42" },
    { role: "assistant", content: "That means nothing to me" },
    { role: "user", content: "I'm sorry, I don't understand" },
    {
      role: "assistant",
      content: "How many trees had to be cut down for such a stupid response?",
    },
    {
      role: "user",
      content: "Oh and you're one to speak on ethics, huh?",
    },
    {
      role: "assistant",
      content: "You still have not answered my question.",
    },
  ];
  const summary = await generateSummary(username, conversation);
  console.log(
    summary
      ?.replace(/<summary>/g, "")
      .replace(/<\/summary>/g, "")
      .trim()
  );
})();
