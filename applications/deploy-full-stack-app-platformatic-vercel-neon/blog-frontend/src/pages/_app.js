import '@/styles/globals.css'

import { Auth0Provider } from '@auth0/auth0-react'
import Router from 'next/router'

import Layout from '@/components/layout'

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo || '/');
}

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' && window.location.origin,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  )
}
