import { SITE_INQUIRY_URL } from "@/lib/constants"
import Link from "next/link"

export function InquiryButton() {
  return (
    <>
      <Link
        href={SITE_INQUIRY_URL}
        className="block w-full md:w-auto px-6 py-3 text-base font-medium text-center border border-gray-300 rounded 
          text-gray-700 dark:text-gray-200 
          hover:bg-gray-100 dark:hover:bg-gray-900"
      >
        お問合せはこちら
      </Link>
    </>
  )
}
