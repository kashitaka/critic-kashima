"use client"
import { SITE_TITLE } from "@/lib/constants"
import { ThemeSwitcher } from "./theme-switcher"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [show, setShow] = useState(true)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 10) {
        setShow(true)
      } else if (y > lastScroll.current) {
        setShow(false) // 下スクロールで非表示
      } else {
        setShow(true) // 上スクロールで表示
      }
      lastScroll.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-neutral-200 dark:border-slate-700 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          <h2 className="text-md md:text-2xl font-bold tracking-tight leading-tight mt-0 flex items-center h-16 md:px-4">
            <Link href="/" className="hover:underline">
              {SITE_TITLE}
            </Link>
          </h2>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/biography" className="hover:underline text-neutral-700 dark:text-neutral-200">
              About
            </Link>
          </nav>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
