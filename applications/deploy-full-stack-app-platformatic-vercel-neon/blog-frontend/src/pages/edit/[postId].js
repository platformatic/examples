import { withAuthenticationRequired } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useBlogApi from '@/hooks/use-blog-api'
import BlogPostForm from '@/components/blog-post-form'

function Edit() {
  const router = useRouter()
  const { postId } = router.query

  const { makeRequest: getPost, data: values, error: loadError } = useBlogApi({})

  useEffect(() => {
    getPost(`/posts/${postId}`)
  }, [])

  const { makeRequest: updatePost, data: updatedPost, error: saveError } = useBlogApi(null)

  const handleFormData = (formData) => {
    updatePost(`/posts/${postId}`, {
      method: 'PUT',
      body: formData
    })
  }

  if (updatedPost) {
    router.push('/')
  }

  return (
    <>
      <h2>Edit post</h2>
      <BlogPostForm
        loadError={loadError}
        values={values}
        submitLabel="Publish changes"
        handleFormData={handleFormData}
        saveError={saveError}
      />
    </>
  )
}

export default withAuthenticationRequired(Edit)
