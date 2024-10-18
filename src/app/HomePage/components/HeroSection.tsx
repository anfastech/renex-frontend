
export default function HeroSection() {
    return (
        <>
            {/* Gap */}
            <div className="h-8"></div>
            <div className="h-4"></div>

            {/* App Title and Head Ads */}
            <div className="relative text-center mb-8 bg-white h-64 main-1"> {/* Set height here */}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100 flex items-center z-2">
                    <h1 className="absolute left-5 text-4xl font-bold text-black">Renex</h1>
                </div>
                <div className="absolute bottom-0 right-0 mb-0 mr-0 z-0">
                    <img src="/images/headeeAds.PNG" alt="BHK Image" className="w-56 h-56 object-cover" /> {/* Image in bottom right */}
                </div>
            </div>
        </>
    );
}