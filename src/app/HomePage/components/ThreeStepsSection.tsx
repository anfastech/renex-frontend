import Image from 'next/image';

export default function ThreeStepsSection() {
  return (
    <section className="wrapper mx-auto px-4 py-9 pb-15">
      <h5 className="text-center text-lg md:text-xl">Three steps. Three minutes</h5>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-8">
        Everything should be this easy.
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        
        <div className="text-center">
          <Image 
            src="/images/messages.png" 
            alt="Rent" 
            className="mx-auto" 
            width={90} 
            height={90}
          />
          <h3 className="font-semibold mt-3 mb-2 text-lg md:text-xl">Rent</h3>
          <p className="text-sm md:text-base">
            Find the perfect rental property with ease and speed.
          </p>
        </div>
        
        <div className="text-center">
          <Image 
            src="/images/sms-tracking.png" 
            alt="Sell" 
            className="mx-auto" 
            width={90} 
            height={90}
          />
          <h3 className="font-semibold mt-3 mb-2 text-lg md:text-xl">Sell</h3>
          <p className="text-sm md:text-base">
            List your property quickly and efficiently to reach potential buyers.
          </p>
        </div>

        <div className="text-center">
          <Image 
            src="/images/edit-2.png" 
            alt="Buy" 
            className="mx-auto" 
            width={90} 
            height={90}
          />
          <h3 className="font-semibold mt-3 mb-2 text-lg md:text-xl">Buy</h3>
          <p className="text-sm md:text-base">
            Explore available properties and find your dream home.
          </p>
        </div>
      </div>
    </section>
  );
}
