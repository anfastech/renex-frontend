"use client";

import HeroSection from "./components/HeroSection";
import GlobalRealEstateBrokerageSection from "./components/GlobalRealEstateBrokerageSection ";
import NewlyLaunchedProjects from "./components/NewlyLaunchedProjects";
import RentalCollection from "./components/RentalCollection";
import TopCities from "./components/TopCities";
import NewsletterSubscription from "./components/NewsletterSubscription";
import TopFeaturesSection from "./components/TopFeaturesSection";
import HomePageSelection from "./components/HomePageSelection";
import FeacturedAds from "../Projects/components/FeacturedAds";
import MiniSteps from "./components/threeStepsMini";

export default function HomePage() {
  return (
    <main>
      <div className="w-full flex justify-center">
        <div className="w-4/5">
          <HeroSection />
        </div>
      </div>
      <div className="container mx-auto p-4 md:p-6">
        <HomePageSelection
          label="Featured Location"
          redirectUrl="/SearchPage"
          className="text-sm md:text-lg lg:text-xl" 
        />
      </div>
      <FeacturedAds />
      <MiniSteps />
      <NewlyLaunchedProjects />
      <TopFeaturesSection />
      <GlobalRealEstateBrokerageSection />
      <RentalCollection />
      <TopCities />
      <NewsletterSubscription />
    </main>
  );
}
