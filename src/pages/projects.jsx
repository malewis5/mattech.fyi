import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoLucid from '@public/images/logos/lucid.png'
import logoCosmos from '@public/images/logos/peak.svg'
import logoOpsiq from '@public/images/logos/opsiq.svg'
import logoRealtor from '@public/images/logos/realtor.svg'
import logoPlanetaria from '@public/images/logos/peak.svg'

const projects = [
  {
    name: 'RevCommerce',
    description:
      'RevCommerce de-couples the front and back ends into an innovative module concept. As a headless system, you can discreetly optimize one section of your system without disrupting others to make changes faster, easier and less costly.',
    link: { href: 'https://revcommerce.com', label: 'revcommerce.com' },
    logo: logoPlanetaria,
  },
  {
    name: "The People's Fire",
    description:
      "The People's Fire is an app designed to bring transparency to philanthropy. It helps users track the flow of donations and see how their contributions are being used. The app aims to increase trust and accountability in the world of charitable giving.",
    link: { href: '#', label: 'Currently under construction' },
    logo: logoCosmos,
  },
  {
    name: 'OPSIQ',
    description:
      'OPSIQ is a comprehensive software for running an inside sales team. It offers a range of features, including real-time reporting, automated lead management, and demo scheduling all powered by a powerful sales algorithm.',
    link: { href: 'https://opsiq.ai', label: 'opsiq.ai' },
    logo: logoOpsiq,
  },
  {
    name: 'Imprint: Learn Visually',
    description:
      "Our mission is to make the world's most important knowledge easy to learn, internalize, and apply to your life. By visualizing and clarifying complex insights from the world's greatest thinkers, we're helping people around the world master essential topics and learn new skills, quickly and easily.",
    link: { href: 'https://imprintapp.com', label: 'imprintapp.com' },
    logo: logoLucid,
  },
  {
    name: 'Realtor.com',
    description:
      'At Realtor.com my team lead the company wide task to improve A11y support on our Flutter app. After finishing, we were promoted to lead support for the entire NewsCorp organization.',
    link: { href: 'https://realtor.com', label: 'realtor.com' },
    logo: logoRealtor,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Matthew Lewis</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
