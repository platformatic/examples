import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import Link from 'next/link'

import LoginButton from '@/components/login'
import LogoutButton from '@/components/logout'
import useBlogApi from '@/hooks/use-blog-api'

export default function Layout({ children }) {
  const { user, error, isAuthenticated, isLoading } = useAuth0()

  const { makeRequest, data: authorPostsCount } = useBlogApi([])

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    makeRequest('/posts/count')
  }, [isAuthenticated])

  const wrapperClasses = "prose max-width-xl mx-auto my-8"

  if (isLoading) {
    return <div className={wrapperClasses}><p>Loading ...</p></div>
  }

  if (error) {
    return <div className={wrapperClasses}><p>Oops... {error.message}</p></div>
  }

  return (
    <div className={wrapperClasses}>
      <header>
        <h1>
          <Link href="/">My blog</Link>
        </h1>
        <section>
          {isAuthenticated ? (
            <>
              <p>
                <strong>Logged in as {user.name}{authorPostsCount?.count !== undefined && (<em>({authorPostsCount.count} posts)</em>)}</strong>
              </p>
              <Link
                href="/write"
                className="bg-green-400 text-gray-800 rounded p-3 inline-block mr-4"
              >
                Write new post
              </Link>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </section>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
