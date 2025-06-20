import { SITE_COVER_IMAGE } from "@/lib/constants"
import Container from "@/app/_components/container"
import Header from "@/app/_components/header"
import Profile from "./_components/profile"
import { TopCover } from "./_components/top-cover"
import { MoreStories } from "@/app/_components/more-stories"
import { getAllPosts } from "@/lib/api"
import { InquiryButton } from "./_components/inquiry"
import { PostTitle } from "./_components/post-title"

export default function Index() {
  const allPosts = getAllPosts()

  return (
    <main>
      <Header />
      <TopCover imageSrc={SITE_COVER_IMAGE} />
      <Container>
        <div className="max-w-4xl mx-auto lg:mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="order-1 lg:order-2 lg:w-1/3 w-full md:mb-4">
              <div className="lg:sticky lg:top-16 -mt-8 md:mt-0">
                <Profile />
                <InquiryButton />
              </div>
            </div>
            <div className="order-2 lg:order-1 lg:w-2/3 w-full">
              <div className="mt-8 mb-4">
                <PostTitle>Works</PostTitle>
              </div>
              <MoreStories posts={allPosts} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
