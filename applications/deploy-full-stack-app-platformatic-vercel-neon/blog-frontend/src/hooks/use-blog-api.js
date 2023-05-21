import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function constructFetchOptions(options, accessToken) {
  const fetchOptions = {
    headers: {},
    ...options
  }

  if (fetchOptions.body) {
    fetchOptions.body = JSON.stringify(fetchOptions.body)
    fetchOptions.headers['content-type'] = 'application/json'
  }

  if (accessToken) {
    fetchOptions.headers.Authorization = `Bearer ${accessToken}`
  }

  return fetchOptions
}

export default function useBlogApi(defaultValue) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  const makeRequest = (url, options = {}) => {
    const executeRequest = async () => {
      setIsLoading(true)

      let accessToken = null
      if (isAuthenticated) {
        accessToken = await getAccessTokenSilently()
      }

      const apiOrigin = process.env.NEXT_PUBLIC_BLOG_API_ORIGIN
      const fetchOptions = constructFetchOptions(options, accessToken)

      try {
        const apiResponse = await fetch(`${apiOrigin}${url}`, fetchOptions);

        if (apiResponse.ok) {
          setData(await apiResponse.json())
        } else {
          const errorText = await apiResponse.text()
          const error = new Error(`[useBlogApi] Blog API error: ${errorText} (${apiResponse.status})`);

          setError(error)
          console.error(error)
        }
      } catch (error) {
        error = new Error(`[useBlogApi] fetch error: ${error.message}`)

        setError(error)
        console.error(error)
      }

      setIsLoading(false)
    }

    executeRequest()
  }

  return {
    data,
    error,
    isLoading,
    makeRequest
  }
}
