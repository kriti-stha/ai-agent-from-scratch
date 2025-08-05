import 'dotenv/config' 
import { runLLM } from './src/llm'

const message = process.argv[2]

if (!message) {
  console.error('Please provide a message')
  process.exit(1)
}

try {
  const response = await runLLM({ messages: [{ role: 'user', content: message }] })
  console.log(response)
} catch (error: any) {
  if (error.code === 'insufficient_quota') {
    console.error('❌ OpenAI API quota exceeded. Please check your billing at https://platform.openai.com/account/billing')
  } else {
    console.error('❌ Error:', error.message)
  }
}
