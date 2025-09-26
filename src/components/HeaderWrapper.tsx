"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

 
  if (pathname === "/auth/login" || pathname === "/auth/registration") {
    return null;
  }

  return <Header />;
}
