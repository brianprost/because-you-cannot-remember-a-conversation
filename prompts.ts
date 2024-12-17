import { type Conversation } from "./types.ts";

const summaryPrompt = `
You are tasked with summarizing a conversation that a specific user was a part of. This summary is for the user's personal records. Follow these instructions carefully:

1. First, you will be provided with a transcript of the conversation:

<conversation_transcript>
{$CONVERSATION_TRANSCRIPT}
</conversation_transcript>

2. The name of the user whose perspective you should summarize from is:

<user_name>{$USER_NAME}</user_name>

3. Your task is to create a concise summary of the conversation, focusing specifically on the questions that were asked to {$USER_NAME} and their responses.

4. When summarizing, follow these guidelines:
   - Identify and list the main questions asked to {$USER_NAME}
   - For each question, briefly summarize {$USER_NAME}'s response
   - Omit small talk, greetings, or irrelevant parts of the conversation
   - Focus on capturing the key points and important information shared by {$USER_NAME}

5. Present your summary in the following format:
   <summary>
   Question 1: [Insert question here]
   {$USER_NAME}'s Response: [Summarize the response]

   Question 2: [Insert question here]
   {$USER_NAME}'s Response: [Summarize the response]

   [Continue for all relevant questions and responses]
   </summary>

6. Remember to maintain the privacy and confidentiality of the conversation. Do not include any sensitive personal information in the summary unless it's directly relevant to the main points of the conversation.

7. Keep the summary concise and to the point, aiming for clarity and brevity while capturing all important information.

Provide your summary within the <summary> tags as shown above.`;

export function getSummaryPrompt(user: string, transcript: Conversation) {
  return summaryPrompt
    .replace("{$CONVERSATION_TRANSCRIPT}", JSON.stringify(transcript))
    .replace("{$USER_NAME}", user);
}
