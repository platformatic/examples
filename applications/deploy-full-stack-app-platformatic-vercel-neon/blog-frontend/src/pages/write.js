import { withAuthenticationRequired } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

import useBlogApi from '@/hooks/use-blog-api'
import BlogPostForm from '@/components/blog-post-form'

function Write() {
  const { makeRequest, data: newPost, error: saveError } = useBlogApi(null)

  const handleFormData = (formData) => {
    makeRequest('/posts', {
      method: 'POST',
      body: formData
    })
  }

  const router = useRouter()
  if (newPost) {
    router.push('/')
  }

  return (
    <>
      <h2>Write new post</h2>
      <BlogPostForm
        submitLabel="Publish post"
        handleFormData={handleFormData}
        saveError={saveError}
      />
    </>
  )
}

export default withAuthenticationRequired(Write)
