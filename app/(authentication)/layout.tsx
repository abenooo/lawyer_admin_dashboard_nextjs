"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { UserNav } from "@/components/header/user-nav";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { UserProvider } from "@/hooks/userContext"; // Adjust the import path as necessary
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
    <html lang="en">
      <body className="w-full  items-center lg:h-screen  flex ">
        {children}
      </body>
    </html>
    </UserProvider>
  );
}
