"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = { user: { firstName: string; lastName: string } };

const Sidebar = ({ user }: SidebarProps) => {
  const pathName = usePathname();

  return (
    <section className="lg:sidebar hidden md:flex">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer items-center justify-center gap-1 p-5 flex"
        >
          <Image
            src="/icons/logo.svg"
            width={64}
            height={54}
            alt="Logo"
            className=" max-xl:size-14"
          />
          <h1 className="sidebar-logo 2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            JSbanking
          </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", "mx-3 my-2 flex p-4", {
                "bg-green-600": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p
                className={cn("sidebar-label hidden lg:block", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
