// root layout.js file
// Defines a basic HTML structure with a MainHeader component

import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

// Define metadata for the page
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
