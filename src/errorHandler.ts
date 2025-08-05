interface OpenAIError {
  type: string
  message: string
  status?: number
  code?: string
}

const ERROR_MESSAGES = {
  invalid_request_error: {
    title: '❌ Invalid request error',
    description: 'This could be due to malformed JSON, missing parameters, or token limits exceeded.',
    action: 'Please check your request format and parameters.'
  },
  rate_limit_error: {
    title: '❌ Rate limit exceeded',
    description: 'Too many requests sent.',
    action: 'Please wait a moment and try again.'
  },
  authentication_error: {
    title: '❌ Authentication error',
    description: 'API key issues such as invalid, expired, or revoked keys.',
    action: 'Please check your OpenAI API key in the .env file.'
  },
  billing_error: {
    title: '❌ Billing error',
    description: 'Problems with account billing such as insufficient credits.',
    action: 'Please check your billing at https://platform.openai.com/account/billing'
  },
  model_not_found: {
    title: '❌ Model not found',
    description: 'The requested model does not exist or is not accessible to your account.',
    action: 'Please check the model name or try a different model.'
  },
  model_error: {
    title: '❌ Model error',
    description: 'Server-side issue with the model.',
    action: 'Please try again later.'
  },
  insufficient_quota: {
    title: '❌ Insufficient quota',
    description: 'Running out of allowed usage quota or tokens.',
    action: 'Please check your billing at https://platform.openai.com/account/billing'
  },
  string_above_max_length: {
    title: '❌ Input too long',
    description: 'Your input exceeds the maximum allowed length.',
    action: 'Please shorten your input and try again.'
  }
} as const

export const handleOpenAIError = (error: OpenAIError): void => {
  const errorInfo = ERROR_MESSAGES[error.type as keyof typeof ERROR_MESSAGES]
  
  if (errorInfo) {
    console.error(errorInfo.title + ':', error.message)
    console.error('   ' + errorInfo.description)
    console.error('   ' + errorInfo.action)
  } else {
    console.error('❌ Unexpected error:', error.message)
    if (error.status) {
      console.error(`   HTTP Status: ${error.status}`)
    }
    if (error.code) {
      console.error(`   Error Code: ${error.code}`)
    }
  }
  
  // Exit with appropriate code for certain errors
  if (['authentication_error', 'billing_error', 'insufficient_quota'].includes(error.type)) {
    process.exit(1)
  }
} 