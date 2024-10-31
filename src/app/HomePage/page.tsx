"use client";

import HeroSection from "./components/HeroSection";
import RealEstateOptions from "./components/RealEstateOptions";
import ThreeStepsSection from "./components/ThreeStepsSection";
import AdsForSuggestionSection from "./components/AdsForSuggestionSection";
import TopFeaturesSection from "./components/TopFeaturesSection";
import GlobalRealEstateBrokerageSection from "./components/GlobalRealEstateBrokerageSection ";
import NewlyLaunchedProjects from "./components/NewlyLaunchedProjects";
import RentalCollection from "./components/RentalCollection";
import TopCities from "./components/TopCities";
import NewsletterSubscription from "./components/NewsletterSubscription";
// import Header from "@/components/Header";
import HomePageSelection from "./components/HomePageSelection";
import FeacturedAds from "../Projects/components/FeacturedAds";
// import NamesComponent from "../Projects/components/NamesCard";

export default function HomePage() {
  return (
    <main className="">
      {/* <Header /> */}
      <div className="w-full flex justify-center">
      <div className="w-4/5">
        <HeroSection />
      </div>
      </div>
      {/* <NamesComponent /> */}
      <div className="container mx-auto p-4 md:p-6">
        <HomePageSelection
          label="Featured Location"
          redirectUrl="/SearchPage"
          className="text-sm md:text-lg lg:text-xl" // Responsive classes
        />
      </div>
      <FeacturedAds />
      {/* RealEstateOptions */}
      <RealEstateOptions />
      {/* ThreeStepsSection */}
      <ThreeStepsSection />
      {/* AdsForSuggestionSection */}
      <AdsForSuggestionSection />
      {/* TopFeaturesSection */}
      <TopFeaturesSection />
      {/* GlobalRealEstateBrokerageSection */}
      <GlobalRealEstateBrokerageSection />
      {/* NewlyLaunchedProjects */}
      <NewlyLaunchedProjects />
      {/* RentalCollection */}
      <RentalCollection />
      {/* TopCities  */}
      <TopCities />
      {/* NewsletterSubscription */}
      <NewsletterSubscription />
    </main>
  );
}
