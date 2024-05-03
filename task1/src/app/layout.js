import AnimationProvider from "@/components/provider";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "PlanetX",
  description: "PlanetX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="shortcut icon"
          href="assets/img/favicon.png"
          type="image/x-icon"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Link rel="stylesheet" href="assets/css/styles.css" />
      </head>
      <body>
        <AnimationProvider>
          <>
            <Navbar />
            {children}
          </>
        </AnimationProvider>
      </body>
    </html>
  );
}
