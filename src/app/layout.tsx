import Footer from "@/app/_components/footer"
import GoogleAnalytics from "./_components/google-analytics"
import { SITE_TITLE, SITE_ROOT_PATH, HOME_OG_IMAGE_URL, SITE_DESCRIPTION } from "@/lib/constants"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import cn from "classnames"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  description: `${SITE_DESCRIPTION}。`,
  openGraph: {
    images: [SITE_ROOT_PATH + HOME_OG_IMAGE_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProd = process.env.NODE_ENV === "production"

  return (
    <html lang="en">
      <head>
        {isProd && <GoogleAnalytics />}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(inter.className, "dark:bg-gray-800 dark:text-gray-200")}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
