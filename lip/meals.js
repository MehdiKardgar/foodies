// This file connects to a SQLite database named "meals.db" and retrieves all records from the "meals" table.

import sql from "better-sqlite3"; // Import the "better-sqlite3" library for working with SQLite databases.

const db = sql("meals.db"); // Create a connection to the "meals.db" database.

// Define an asynchronous function called "getMeals".
// The "getMeals" function retrieves all records from the “meals” table.
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay (5 seconds) to demonstrate an asynchronous operation.

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all(); // Prepare and execute an SQL query to retrieve all records from the "meals" table.
}

// the "getMeal" function Retrieve a specific meal from the "meals" table based on its slug.
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
