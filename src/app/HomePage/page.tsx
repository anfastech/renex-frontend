"use client"

// import Header from "./components/Header";
// import SearchAndFilters from "./components/SearchAndFilters";
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
import Header from "@/components/Header";
import HomePageSelection from "./components/HomePageSelection";
// import SearchBar from "./components/SearchBar";
// import ContSearch from "./components/ContSearch";
// import Header from "./components/Header";
export default function HomePage() {
    return (
        <main className="w-full">
            {/* Header Section */}
            <Header />
            {/* Hero Section */}
            <HeroSection />


            {/* SearchAndFilters */}
            {/* <SearchBar /> */}
            {/* <SearchAndFilters /> */}
            {/* <ContSearch /> */}

            <div className="container mx-auto p-4">
                <HomePageSelection label="Featured Location" redirectUrl="/SearchPage" />
            </div>

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