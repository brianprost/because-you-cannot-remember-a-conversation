export type Conversation = Array<{
  role: "user" | "assistant";
  content: string;
}>;
