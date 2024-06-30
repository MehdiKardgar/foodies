// image-picker.js
// The purpose of this component function is to render some markup for an image picker and handle the image selection process.

// this code's purpose is to render an image picker interface and handle the process of selecting an image.
// The component allows users to choose an image file, previews the selected image, and triggers the file input dialog when the “Pick an Image” button is clicked.

"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(); // State to track the selected image.
  const imageInput = useRef(); // Ref to the input element for selecting images.

  // Function to trigger the file input dialog.
  function handlePickClick() {
    imageInput.current.click();
  }

  // Function to handle image selection.
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null); // Reset picked image if no file is selected.
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result); // Set the selected image data.
    };
    fileReader.readAsDataURL(file); // Read the image file as a data URL.
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
