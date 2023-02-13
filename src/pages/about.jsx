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
import portraitImage from '@public/images/image-3.webp'

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
          content="I’m Matt Lewis. I live remotely, where I engineer the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Matt at Nextjs Conference 2022"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Matt Lewis. I live remotely, where I engineer the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am Matt Lewis, a software engineer with a background in
                chemical engineering. After obtaining my degree in chemical
                engineering, I realized that my true passion was in software
                engineering. I was fascinated by the way that software could be
                used to automate processes and make things more efficient. This
                realization led me to switch careers and focus on software
                engineering.
              </p>
              <p>
                Now, I work in the ecommerce industry and specialize in cloud
                computing. I leverage my knowledge of both chemical engineering
                and software engineering to create innovative solutions for my
                clients. I understand the importance of stability and
                reliability in the systems I build and am always looking for
                ways to improve the user experience. I am known for my ability
                to take complex problems and break them down into manageable
                tasks.
              </p>
              <p>
                My work has not gone unnoticed and I have quickly risen through
                the ranks to become a respected leader in my field. I am often
                sought after by clients and colleagues alike for my expertise
                and guidance. I am a strong believer in the power of technology
                and am always looking for new ways to make a positive impact in
                the world through my work. I continue to push the boundaries of
                what is possible with cloud computing and am committed to
                staying at the forefront of this rapidly evolving field.
              </p>
              <p>
                In addition to my passion for technology, I am also a firm
                believer in the power of remote work and travel. I have found
                that being able to work from anywhere in the world has allowed
                me to have a better work-life balance and has also broadened my
                horizons in ways that I never thought were possible. I love the
                freedom and flexibility that remote work provides and am always
                looking for new opportunities to travel and work from new and
                exciting places. Whether it&apos;s working from a beach in Costa
                Rica or from a mountain cabin in the Lake Tahoe, I am always
                striving to find new ways to combine my passion for work and
                travel. I believe that this unique combination has allowed me to
                be more productive, creative, and happy in my personal and
                professional life.
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
