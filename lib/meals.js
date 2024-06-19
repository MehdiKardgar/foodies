// meals.js
// This file connects to a SQLite database named "meals.db" and retrieves all records from the "meals" table.

import fs, { createWriteStream } from "node:fs"; // Import the file system module to work with files.

import sql from "better-sqlite3"; // Import the "better-sqlite3" library for working with SQLite databases.
import slugify from "slugify"; // Import the slugify library to create URL-friendly slugs.
import xss from "xss"; // Import the xss library to sanitize user input.

const db = sql("meals.db"); // Create a connection to the "meals.db" database.

// Define an asynchronous function called "getMeals".
// The "getMeals" function retrieves all records from the “meals” table (geting meals)..
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay (5 seconds) to demonstrate an asynchronous operation.

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all(); // Prepare and execute an SQL query to retrieve all records from the "meals" table.
}

// Define the "getMeal" function Retrieve a specific meal from the "meals" table based on its slug (geting single meal).
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// Define the "saveMeal" function to save a new meal record.
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // Generate a unique slug for the meal title.
  meal.instructions = xss(meal.instructions); // I wanna remove any harmful content from instructions box

  // sotre image
  const extension = meal.image.name.split(".").pop(); // Get the file extension of the uploaded image because it could be a JPEG or PNG file.
  const fileName = `${meal.slug}.${extension}`; // Generate a unique file name for the image, and not use the file name of the user.

  // Create a writable stream to save the image data to a file.
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`; // Update the image path in the meal object.

  // Insert the meal record into the database.
  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
       VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
       )
    `
  ).run(meal);
}
