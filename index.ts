import 'dotenv/config' 
import { runLLM } from './src/llm'
import { handleOpenAIError } from './src/errorHandler'

const message = process.argv[2]

if (!message) {
  console.error('Please provide a message')
  process.exit(1)
}

try {
  const response = await runLLM({ messages: [{ role: 'user', content: message }] })
  console.log(response)
} catch (error: any) {
  handleOpenAIError(error)
}
