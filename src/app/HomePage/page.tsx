"use client"

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
import NamesComponent from "../Projects/components/NamesCard";

export default function HomePage() {
    return (
        <main className="w-full">
            {/* <Header /> */}
            <HeroSection />
            <NamesComponent />

            <div className="container mx-auto p-4">
                <HomePageSelection label="Featured Location" redirectUrl="/SearchPage" />
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
    )
};