import { RiArrowRightUpLine } from "@remixicon/react";
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade";
import GameOfLife from "./HeroBackground";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cx } from "@/lib/utils";

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <Link
            aria-label="Book a meeting"
            href={process.env.NEXT_PUBLIC_CAL_BOOKING_LINK!}
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-teal-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-teal-500/[2.5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                Hi! 👋
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Let's build something together
                </span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </Link>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Launch</FadeSpan> <FadeSpan>your</FadeSpan>
          <br />
          <FadeSpan>idea</FadeSpan> <FadeSpan>today</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>
            Reimagine the online space with custom web development,
          </FadeSpan>{" "}
          <FadeSpan>dynamic user experiences, and cutting-edge</FadeSpan>{" "}
          <FadeSpan>
            digital solutions to help your business thrive from the ground up.
          </FadeSpan>
        </p>
        <FadeDiv>
          <Link
            href="/quote"
            className={cx("mt-6", buttonVariants({ variant: "default" }))}
          >
            Let's Get Started
          </Link>
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  );
}
