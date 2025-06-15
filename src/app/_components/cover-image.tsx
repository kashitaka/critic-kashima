import cn from "classnames"
import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="relative w-full lg:max-h-screen aspect-[1/1] lg:aspect-[3/2]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm mx-auto object-contain", "dark:shadow-white/10", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
  return (
    // <div className="mx-auto sm:px-0 md:px-8 sm:mx-0 xl:px-16 w-full flex justify-center pt">
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
