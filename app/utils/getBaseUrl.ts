export const getBaseUrl = () => {
    console.log('ENVIRONMENT:', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
      return `${process.env.NEXT_PUBLIC_URL}`
    }
  
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
