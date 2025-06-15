import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBioSlug } from "@/lib/api"
import { SITE_ROOT_PATH, SITE_TITLE, HOME_OG_IMAGE_URL, PROFILE } from "@/lib/constants"
import markdownToHtml from "@/lib/markdownToHtml"
import Container from "@/app/_components/container"
import Header from "@/app/_components/header"
import { PostBody } from "@/app/_components/post-body"
import { PostTitle } from "@/app/_components/post-title"
import { InquiryButton } from "../_components/inquiry"

export default async function BioPage() {
  const post = getBioSlug()

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || "")

  return (
    <main>
      <Header />
      <Container>
        <article className="max-w-2xl mx-auto mb-32">
          <PostTitle>{post.title}</PostTitle>
          <PostBody content={content} />
          <div className="mt-16">
            <InquiryButton />
          </div>
        </article>
      </Container>
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const post = getBioSlug()

  if (!post) {
    return notFound()
  }

  return {
    title: post.title + " | " + SITE_TITLE,
    openGraph: {
      type: "website",
      title: post.title + " | " + SITE_TITLE,
      images: [SITE_ROOT_PATH + HOME_OG_IMAGE_URL],
      description: post.title + " | " + PROFILE.description,
      siteName: SITE_TITLE,
    },
  }
}
