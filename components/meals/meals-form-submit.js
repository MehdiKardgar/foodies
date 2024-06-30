// meals-form-submit.js

// This code renders a button that is disabled when the form is pending submission.
// The button text changes dynamically based on whether the form is currently being submitted or not.

"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus(); // Destructure the 'pending' state from the useFormStatus hook to determine if the form is being submitted

  return (
    // Render a button that is disabled when the form is pending submission, with text that changes based on the pending state
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
