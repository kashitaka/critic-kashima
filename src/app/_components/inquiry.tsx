import { SITE_INQUIRY_URL } from "@/lib/constants"
import Link from "next/link"

export function InquiryButton() {
  return (
    <>
      <Link
        href={SITE_INQUIRY_URL}
          className="block w-full md:w-auto px-6 py-3 text-base font-medium text-center text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
      >
        お問合せはこちら
      </Link>
    </>
  )
}
