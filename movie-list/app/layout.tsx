import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from '../utils/provider'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header_menu">
          <Link href={"/favorite-list"}>Favorite list</Link>
          <Link href={"/movie-list"}>Popular movie</Link>
        </div>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
