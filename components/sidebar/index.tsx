"use client";

import { cn } from "@/lib/utils";
// import { Playlist } from "../data/playlists";
import Link from "next/link";
import { useState } from "react";

import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Image from "next/image";

// interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
//   //   playlists: Playlist[];
// }

export function Sidebar({ className, setMenu }: any) {
  const [position, setPosition] = useState("bottom");
  const pathName = usePathname();
  const activeLinkStyle = "bg-accent text-primary";

  const links = [
    {
      href: "/",
      label: "Dashboard",
      icon: "/dashboardIcon.svg",
    },
    {
      href: "/users/view-users",
      label: "Users",
      icon: "/userIcon.svg",
      // dropdown: [
      //   {
      //     href: "/users/view-users",
      //     label: "View Users",
      //     icon: "/view.svg",
      //   },
      //   { href: "/users/add-users", label: "Add User", icon: "/add.svg" },
      // ],
    },
    {
      href: "/jobs/view-jobs",
      label: "Jobs",
      icon: "/jobsIcon.svg",
      // dropdown: [
      //   { href: "/jobs/view-jobs", label: "View Jobs", icon: "/view.svg" },
      //   { href: "/jobs/add-jobs", label: "Add Job", icon: "/add.svg" },
      // ],
    },
    {
      href: "/companies/view-companies",
      label: "Companies",
      icon: "/companiesIcon.svg",
      // dropdown: [
      //   {
      //     href: "/companies/view-companies",
      //     label: "View Companies",
      //     icon: "/view.svg",
      //   },
      //   {
      //     href: "/companies/add-companies",
      //     label: "Add Companies",
      //     icon: "/add.svg",
      //   },
      // ],
    },
    {
      href: "/blogs/view-blogs",
      label: "Blogs",
      icon: "/blogIcon.svg",
      // dropdown: [
      //   { href: "/blogs/view-blogs", label: "View Blogs", icon: "/view.svg" },
      //   { href: "/blogs/add-blogs", label: "Add Blog", icon: "/add.svg" },
      // ],
    },
    {
      href: "/cvs/view-cvs",
      label: "Cvs",
      icon: "/cvIcon.svg",
      // dropdown: [
      //   { href: "/cvs/view-cvs", label: "View CVs", icon: "/view.svg" },
      //   { href: "/cvs/add-cvs", label: "Add CV", icon: "/add.svg" },
      // ],
    },
  ];

  return (
    <div className={cn(`pb-12  min-h-screen bg-inherit  `, className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex justify-between ">
            <h2 className="mb-2 h-16 px-4 md:font-bold whitespace-nowrap lg:text-lg font-semibold tracking-tight">
              Walia Jobs
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:hidden fill-black dark:fill-white"
              onClick={() => setMenu(false)}
            >
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </svg>
          </div>

          <div className="space-y-6 px-5 flex flex-col">
            {links.map((link, index) => {
              if ("dropdown" in link) {
                const dropdownLink = link as {
                  dropdown: { href: string; label: string; icon?: string }[];
                };

                return (
                  <Collapsible key={index}>
                    <CollapsibleTrigger asChild>
                      <p
                        className={`w-full flex items-center hover:bg-slate-200 transition ease-in-out duration-150 delay-100 px-2 py-2 rounded-md ${
                          pathName == dropdownLink?.dropdown[0].href ||
                          pathName == dropdownLink?.dropdown[1].href
                            ? activeLinkStyle
                            : ""
                        }`}
                      >
                        <Image
                          width="16"
                          height="16"
                          src={link?.icon}
                          alt="Icon"
                          className="mr-2"
                        />
                        <span className="">{link.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-auto h-4 w-4 "
                        >
                          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                        </svg>
                      </p>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 text-sm">
                      {dropdownLink?.dropdown.map((dropdown, index) => (
                        <Link
                          key={index}
                          href={dropdown.href}
                          onClick={() => setMenu(false)}
                          className={`w-full flex items-center pt-2 mt-2 pb-2 hover:bg-slate-200 transition ease-in-out duration-150 delay-100 px-2 py-2 rounded-md ${
                            pathName == dropdown.href ? activeLinkStyle : ""
                          }`}
                        >
                          {dropdown.icon && (
                            <Image
                              width="16"
                              height="16"
                              src={dropdown.icon}
                              alt="Icon"
                              className="mr-2"
                            />
                          )}

                          {dropdown.label}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              } else {
                return (
                  <Link
                    href={link.href}
                    key={index}
                    onClick={() => setMenu(false)}
                    className={`w-full flex items-center hover:bg-slate-200 transition ease-in-out duration-150 delay-100 px-2 py-2 rounded-md ${
                      pathName == link.href ? activeLinkStyle : ""
                    }`}
                  >
                    <Image
                      width="16"
                      height="16"
                      className="mr-2"
                      src={link.icon}
                      alt="Icon"
                    />
                    <span className="">{link.label}</span>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
