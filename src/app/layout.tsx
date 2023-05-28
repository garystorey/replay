import { ClerkProvider } from "@clerk/nextjs"

import "@/styles/globals.css"

import { Footer, Header } from "../components"

export const metadata = {
  title: "PageTitle",
  description: "this is the page description",
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
