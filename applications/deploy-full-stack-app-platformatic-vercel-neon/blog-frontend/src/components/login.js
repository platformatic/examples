import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-green-400 text-gray-800 rounded p-3"
    >
      Log in
    </button>
  )
}
