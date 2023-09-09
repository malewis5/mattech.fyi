import Head from 'next/head'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

import {
  PhotosRow,
  ArticleList,
  Newsletter,
  SocialLink,
  Container,
  Resume,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components'

import image1 from '@public/images/image-1.webp'
import image2 from '@public/images/image-2.webp'
import image3 from '@public/images/image-3.webp'
import image4 from '@public/images/image-4.webp'
import image5 from '@public/images/image-5.webp'
import image7 from '@public/images/image-7.webp'
import image8 from '@public/images/image-8.webp'
import image9 from '@public/images/image-9.webp'
import image10 from '@public/images/image-10.webp'

const photosArray = [
  { image: image1, location: 'Mariposa Grove, California', priority: true },
  {
    image: image9,
    location: 'Mal Pais, Costa Rica',
    priority: true,
    author: 'Matt Lewis',
  },
  {
    image: image3,
    location: 'Nextjs Conference 2022',
    priority: true,
    author: 'Vercel',
  },
  { image: image2, location: 'Bryce Canyon, Utah', priority: true },
  {
    image: image10,
    location: 'Black Canyon of the Gunnison, Colorado',
    priority: true,
    author: 'Matt Lewis',
  },
  { image: image5, location: 'Moab, Utah', priority: true },

  { image: image7, location: 'Yosemite, California', priority: true },
  {
    image: image8,
    location: 'Santa Teresa, Costa Rica',
    priority: true,
    author: 'Matt Lewis',
  },
  {
    image: image4,
    location: 'Death Valley, California',
    priority: true,
    author: 'Matt Lewis',
  },
]

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Matthew Lewis - Software designer, founder, and amateur explorer.
        </title>
        <meta
          name="description"
          content="I'm Matt, a NYC-based software engineer specializing in ecommerce and cloud solutions. Driven by innovation, I excel at turning complex challenges into enduring value."
        />
      </Head>

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, founder, and amateur explorer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Matt, a NYC-based software engineer specializing in
            ecommerce and cloud solutions. Driven by innovation, I excel at
            turning complex challenges into enduring value.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/mttlws"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/matt____lewis?igshid=MWI4MTIyMDE="
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/malewis5"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/malewis5"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <PhotosRow photosArray={photosArray} />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <ArticleList articles={articles} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
