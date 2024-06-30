// nav-link.js
// this code renders a link using the Link component from Next.js. The Link’s styling is conditionally applied based on whether the current path starts with the specified "href".
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname(); // Get the current pathname using usePathname hook

  return (
    // Render a Next.js Link component with conditional styling
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
