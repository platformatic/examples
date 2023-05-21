import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="bg-green-400 text-gray-800 rounded p-3"
    >
      Log out
    </button>
  );
}
