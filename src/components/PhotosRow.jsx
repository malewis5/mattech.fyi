import Image from 'next/image'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export function PhotosRow({ photosArray }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div
        className={`-my-4 flex flex-row items-start justify-start gap-5 overflow-y-scroll py-4 sm:items-start sm:gap-8`}
      >
        {photosArray?.map(({ image, location, author }, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
              isHomePage ? 'w-44' : 'w-72'
            )}
          >
            <div
              style={{ zIndex: 2 }}
              className="group group relative flex h-full w-full flex-col items-center justify-center p-2 text-xs text-white hover:bg-[#00000090]"
            >
              <p className="opacity-0 group-hover:opacity-100">{location}</p>
              <p className="text-center opacity-0 group-hover:opacity-100">
                Photo by: {author ?? 'Matt Lewis & Chad D. Jasso'}
              </p>
            </div>

            <Image
              src={image}
              alt={`Matt at ${location}`}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              priority={image?.priority ?? false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
