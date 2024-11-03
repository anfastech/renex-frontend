'use client'; // Make sure the layout is still a client component

import localFont from "next/font/local";
import "../styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { metadata } from "./metadata"; // Import metadata

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set a default title if metadata.title is not a valid string
  const title = typeof metadata.title === 'string' ? metadata.title : 'Default Title';

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title> {/* Use a valid title here */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          defer
        ></script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 flex flex-col lg:flex-row justify-around w-full`}>
        <SessionProvider>
          {/* Optional sidebars */}
          <div className="bg-gray-300 rounded-lg border border-gray-400 m-2 lg:h-48 lg:w-1/5 lg:mt-72 lg:sticky lg:top-48 invisible lg:visible h-0 w-0"></div>
          <Header />
          <main className="w-full lg:w-1/2">
            {children}
          </main>
          <Footer />
          <div className="bg-gray-300 rounded-lg border border-gray-400 m-2 lg:h-48 lg:w-1/5 lg:mt-56 lg:sticky lg:top-48 invisible lg:visible h-0 w-0"></div>
        </SessionProvider>
      </body>
    </html>
  );
}
