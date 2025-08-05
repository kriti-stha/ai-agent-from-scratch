# AI Agent

A TypeScript-based AI agent implementation that can perform various tasks using natural language processing and tool execution capabilities.

## Features

- **Natural Language Processing**: Interprets user queries and converts them into actionable tasks
- **Tool Execution**: Runs various tools and commands based on user requests
- **Memory Management**: Maintains context and conversation history
- **UI Interface**: User-friendly interface for interacting with the agent
- **LLM Integration**: Powered by OpenAI's language models for intelligent responses

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

```bash
git clone <repository-url>
cd ai-agent
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

## Project Structure

- `src/agent.ts` - Main agent logic and coordination
- `src/ai.ts` - AI/LLM integration
- `src/llm.ts` - Language model interface
- `src/memory.ts` - Memory and context management
- `src/systemPrompt.ts` - System prompts and instructions
- `src/toolRunner.ts` - Tool execution engine
- `src/ui.ts` - User interface components
- `types.ts` - TypeScript type definitions
