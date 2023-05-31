"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export function Login() {
  return (
    <div className="sm:flex sm:gap-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton afterSignUpUrl="/profile" afterSignInUrl="/profile" />
      </SignedOut>
    </div>
  )
}
