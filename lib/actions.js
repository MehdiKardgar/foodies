// actions.js
// // This file defines server actions related to sharing meals.

"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// Define the "shareMeal" function to handle form submission and save a new meal.
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0 ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@")
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal); // Save the meal using the saveMeal function.
  redirect("/meals"); // Redirect to the "/meals" page after saving.
}
