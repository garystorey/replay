import "@/styles/globals.css"

export const metadata = {
  title: "PageTitle",
  description: "this is the page description",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
