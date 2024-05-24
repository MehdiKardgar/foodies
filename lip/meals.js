// This file connects to a SQLite database named "meals.db" and retrieves all records from the "meals" table.

import sql from "better-sqlite3"; // Import the "better-sqlite3" library for working with SQLite databases.

const db = sql("meals.db"); // Create a connection to the "meals.db" database.

export async function getMeals() {
  // Define an asynchronous function called "getMeals".
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay (2 seconds) to demonstrate an asynchronous operation.
  return db.prepare("SELECT * FROM meals").all(); // Prepare and execute an SQL query to retrieve all records from the "meals" table.
}
