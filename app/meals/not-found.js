// not-found.js

// Summary: This code defines a React component for handling 404 (Not Found) errors.
// When a user accesses a route that doesn't exist, this component displays an error message and provides a link to go back to the homepage.

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>
        Unfortunately, we could not find the requested page or meal data (404).
      </p>

      <p>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </main>
  );
}
