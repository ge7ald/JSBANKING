"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavProps = { user: { firstName: string; lastName: string } };

const MobileSidebar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <section className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <nav className="flex justify-around items-center py-2">
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
                { "bg-green-100 text-green-600": isActive },
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default MobileSidebar;
