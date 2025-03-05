"use client";

import { siteConfig } from "@/app/siteConfig";
import useScroll from "@/lib/useScroll";
import { cx } from "@/lib/utils";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { MatTechMark } from "../../../public/MatTechMark";

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(15);

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Solar Tech Logo</span>
            <MatTechMark className="w-22" />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            {/* <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="#solutions">
                Solutions
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#farm-management">
                Portfolio
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#solar-analytics">
                Analytics
              </Link>
            </div> */}
          </nav>
          <Link
            href="/quote"
            className={buttonVariants({ variant: "default" })}
          >
            Get a quote
          </Link>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#solar-analytics">Analytics</Link>
            </li>
          </ul>
          <Link
            href="/quote"
            className={cx(
              "w-full text-lg",
              buttonVariants({ variant: "secondary" })
            )}
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
