// error.js

// Summary: This code defines a React component for handling errors. When an error occurs, it displays a message indicating that data fetching failed.

"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal. Please fill in all requested information.</p>

      <p>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </main>
  );
}
