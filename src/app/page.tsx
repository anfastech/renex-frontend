import Footer from "@/components/Footer";
import HomePage from "./HomePage/page";
import NamesComponent from "./Projects/components/NamesCard";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <NamesComponent />
      <HomePage />
      <Footer />
    </>
  );
}
