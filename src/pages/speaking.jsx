import Head from 'next/head'
import { Button } from '@/components/Button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Matthew Lewis</title>
        <meta
          name="description"
          content="I’m available for speaking events around the world."
        />
      </Head>
      <SimpleLayout
        title="I’m available for speaking events around the world."
        intro="One of my favorite ways to share my ideas is live on stage. Written word is good - you’re reading it right now - but there’s much more communication bandwidth in a spoken conversation than there is in writing."
      >
        {/* <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div> */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            And on my own mic.
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I love podcast interviews. They give me the opportunity to answer
            questions instead of just presenting my opinions.
          </p>
        </div>
        <div className="mt-8 sm:mt-10" />
        <div className="space-y-20">
          <Button
            variant="secondary"
            className="group mt-6 w-full max-w-2xl"
            href={
              'mailto:matthew.a.lewis7@gmail.com?subject=Speaking Opportunity'
            }
          >
            <EnvelopeIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            Contact Me about Speaking
          </Button>
        </div>
      </SimpleLayout>
    </>
  )
}
