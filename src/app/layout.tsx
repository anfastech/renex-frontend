'use client'; 
import localFont from "next/font/local";
import "../styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react"; 
import { metadata } from "./metadata"; 
import Image from "next/image";

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
  const title = typeof metadata.title === 'string' ? metadata.title : 'Default Title';

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
          defer
        ></script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col lg:flex-row justify-around w-full`}>
        <SessionProvider>
            <div className="rounded-lg border m-2 lg:mt-72 lg:sticky lg:top-48 invisible lg:visible h-64">
            <Image className="rounded-lg" src="/images/sldier11.jpeg" width={500} height={300} alt="Renex Shader" />
            <br />
            </div>
          <Header />
          <main className="w-full lg:w-1/2">
            {children}
          </main>
          <Footer />
          <div className="rounded-lg border m-2 lg:mt-72 lg:sticky lg:top-48 invisible lg:visible h-64">
            <Image className="rounded-lg" src="/images/slider1111.jpeg" width={500} height={300} alt="Renex Shader" />
            <br />
            {/* <Image className="rounded-lg" src="/images/sldier11.jpeg" width={500} height={300} alt="Renex Shader" /> */}
            </div>
        </SessionProvider>
      </body>
    </html>
  );
}
