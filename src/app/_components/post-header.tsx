import DateFormatter from "./date-formatter"
import { PostTitle } from "@/app/_components/post-title"
import Profile from "./profile"

type Props = {
  title: string
  date: string
}

export function PostHeader({ title, date }: Props) {
  return (
    <div className="mx-auto md:mt-8">
      <PostTitle>{title}</PostTitle>
      <div className="text-xs text-gray-400 mt-2 mb-8">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
