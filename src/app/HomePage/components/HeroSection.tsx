
export default function HeroSection() {
    return (
        <section
            className="bg-cover bg-center h-64 relative"
            style={{ backgroundImage: "url('https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-ss-kiavasa.jpg')" }} // Use correct path
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            {/* Content */}
            <div className="container mx-auto relative z-10 h-full flex items-center">
                {/* Placeholder for text or content */}
                {/* <div className="text-white text-4xl font-bold">#KabTakPuchoge</div> */}
            </div>
        </section>
    )
}