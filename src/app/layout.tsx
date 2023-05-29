import { ClerkProvider } from "@clerk/nextjs"

import "@/styles/globals.css"

import { Footer, Header } from "../components"

export const metadata = {
  title: "Junkfood Arcades",
  description: "Junkfood Arcades",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
