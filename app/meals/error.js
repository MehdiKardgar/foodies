// error.js

// Summary: This code defines a React component for handling errors. When an error occurs, it displays a message indicating that data fetching failed.

"use client";

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>

      <p>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </main>
  );
}
