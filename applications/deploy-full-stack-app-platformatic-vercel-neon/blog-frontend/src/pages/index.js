import { useEffect } from 'react'

import useBlogApi from '@/hooks/use-blog-api'
import BlogPost from '@/components/blog-post'

export default function Home() {
  const { makeRequest, data: posts, error, isLoading } = useBlogApi([])

  useEffect(() => {
    makeRequest('/posts?limit=100&orderby.createdAt=desc')
  }, [])

  if (error) {
    return <p>Error loading blog posts.</p>
  }

  if (isLoading) {
    return <p>Loading blog posts...</p>
  }

  return posts.map(post => <BlogPost {...post} key={post.id} />)
}
