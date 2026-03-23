import './globals.css'

export const metadata = {
  title: 'Sai Teja - Portfolio',
  description: 'Building CX systems at the intersection of AI, operations, and distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
