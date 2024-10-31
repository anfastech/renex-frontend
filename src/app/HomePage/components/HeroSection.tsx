export default function HeroSection() {
  return (
    <>
      {/* Gap */}
      <div className="h-8"></div>
      <div className="h-4 lg:h-24"></div>

      {/* App Title and Head Ads */}
      <div className="relative text-center mb-8 bg-white h-64 main-1 lg:h-96 flex">
        {" "}
        {/* Set height here */}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100 flex items-center z-2">
          <h1 className="absolute left-5 text-3xl md:text-5xl lg:text-7xl font-bold text-black">
            Renex
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 mb-0 mr-0 z-0">
          <img
            src="/images/headeeAds.PNG"
            alt="BHK Image"
            className="w-40 h-40 md:w-56 md:h-56 lg:w-96 lg:h-96 object-cover rounded-lg"
          />{" "}
          {/* Image in bottom right */}
        </div>
      </div>
    </>
  );
}
