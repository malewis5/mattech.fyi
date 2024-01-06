import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import avatarImage from '@public/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon
          className={`h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500`}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Matt Lewis</title>
        <meta
          name="description"
          content="Hey 👋 I’m Matt Lewis. Here's some more info. Thank you for taking a look at my site!"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt="Matt at Nextjs Conference 2022"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey 👋 I’m Matt Lewis. Thank you for taking a look at my site!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Matt Lewis, and I&apos;ve spent my career at the
                intersection of engineering and innovation. I originally
                graduated with a degree in chemical engineering on a full
                tuition scholarship, where I won 1st place in the Reactor Design
                Competition. Despite my achievements, I discovered my true
                calling lay waiting for me in the digital realm. This pivot to
                software engineering wasn&apos;t just a career change; it was a
                dedication to the art of problem-solving through code.
              </p>

              <p>
                Today, I work in the ecommerce industry, specializing in
                headless, cloud computing solutions. What sets me apart is the
                unique problem-solving approach I&apos;ve honed through my
                chemical engineering background. Chemical engineering taught me
                not just the laws of physics, but also the art of balancing
                fast, intuitive thinking with slow, reasoned analysis. Whether
                I&apos;m dealing with a nuclear reactor or a distributed
                database, I rely on these core principles to guide me. In both
                realms, understanding the fundamental building blocks—be it
                physical laws or fundamental data structures—enables me to
                dissect complex challenges and tackle them effectively. I
                don&apos;t just develop solutions; I excel at breaking down
                intricate issues into manageable tasks, always with an eye on
                long-term success.
              </p>

              <p>
                My work has garnered attention, allowing me to make meaningful
                contributions and be a trusted resource for clients and
                colleagues alike. But my insights aren&apos;t confined to the
                office; they&apos;re influenced by my broader experiences and
                observations, including those in nature. Whether it&apos;s
                understanding the complex system that is our planet, or drawing
                inspiration from the mathematics of nature, I leverage these
                experiences to think creatively and solve problems. After all,
                Earth&apos;s systems are among the most robust and beautiful
                ever designed, and they offer valuable lessons in resilience and
                balance that I apply to my professional challenges.
              </p>

              <p>
                To sum up, my journey is not merely a tale of projects and
                achievements; it&apos;s a story of relentless curiosity and a
                commitment to bring enduring value to the table. Whether
                I&apos;m deciphering complex algorithms or finding inspiration
                in the spiraling patterns of a nautilus shell, I don&apos;t
                merely adapt to my environment—I elevate it. My goal is to
                continue leveraging this holistic, value-driven approach to
                solve intricate challenges in the ecommerce world and beyond. In
                essence, I don&apos;t just build solutions; I create value.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/mttlws" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/matt____lewis?igshid=YmMyMTA2M2Y="
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/malewis5"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/malewis5"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:matthew.a.lewis7@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                matthew.a.lewis7@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
