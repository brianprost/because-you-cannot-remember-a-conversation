# Because You Cannot Remember a Conversation

A TypeScript application that generates summaries of conversations using the Bedrock Runtime API.

## Overview

This application takes a conversation transcript and a username as input, and generates a concise summary of the conversation from the user's perspective. The summary is generated using a ConverseCommand sent to the Bedrock Runtime API.

## Dependencies

- `@aws-sdk/client-bedrock-runtime`
- Deno runtime [official documentation](https://deno.com/)

## Usage

1. Clone this repository and navigate to the project directory.
2. Make sure you have Deno 2.x installed.
   2a. Make sure you are authenticated to AWS and have enabled model access to Claude Haiku 3.5 in the [Bedrock Model Access Console](https://us-east-1.console.aws.amazon.com/bedrock/home?region=us-east-1#/modelaccess)
3. Run the application using `deno run --allow-all main.ts`.

## API Documentation

The `generateSummary` function takes two parameters:

- `username`: The username of the user who participated in the conversation.
- `conversation`: The conversation transcript, represented as an array of objects with `role` and `content` properties.

The function returns a promise that resolves to a string containing the generated summary.

## License

This project is licensed under the MIT License. See LICENSE for details.
