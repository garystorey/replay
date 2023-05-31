// import Link from "next/link"
import { Login } from "../login/login"

export function Header() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-start md:gap-12">
              <b className="block">
                <span className="sr-only">Home</span>
                JF Arcades
              </b>
            </div>

            {/* <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link href="/profile">
                      <b className="text-gray-500 transition hover:text-gray-500/75">Profile</b>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div> */}

            <div className="flex items-center gap-4">
              <Login />

              <div className="block md:hidden">
                <button
                  type="button"
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
