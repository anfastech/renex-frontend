import Slider from "@/app/slider/sliderMin";

export default function HeroSection() {
  return (
    <>
      {/* Gap */}
      <div className="h-8"></div>
      <div className="h-8 lg:h-24"></div>

      {/* App Title and Head Ads */}
      <div className="relative text-center mb bg-white">
        {" "}
        {/* Set height here */}
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100 flex items-center z-2">
          <h1 className="absolute left-5 text-3xl md:text-5xl lg:text-7xl font-bold text-black">
            Renex
          </h1>
        </div> */}
        {/* <div className="absolute bottom-0 right-0 mb-0 mr-0 z-0">
        </div> */}
          <Slider />{" "}
      </div>
    </>
  );
}