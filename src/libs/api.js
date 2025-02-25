import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.VITE_APP_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_APP_MICROCMS_API_KEY
})

export const fetchBlogs = async (queries = {}) => {
  try {
    return await client.get({
      endpoint: 'notes',
      queries
    })
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    throw error
  }
}
