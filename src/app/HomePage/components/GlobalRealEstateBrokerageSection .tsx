import Image from 'next/image';

const GlobalRealEstateBrokerageSection = () => {
  return (
    <section>
      <section className="wrapper mb-[10%] py-10">
        <h1 className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[50px] text-center font-bold mb-[8%] w-[100%] lg:w-[60%] mx-auto">
          We are a global, boutique real estate brokerage
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[48%] w-[100%]">
            <h2 className="text-[12px] md:text-[16px] lg:text-[20px] font-semibold mb-[2%]">
              SELL OR RENT YOUR PROPERTY
            </h2>
            <h2 className="text-[12px] md:text-[20px] lg:text-[40px] font-semibold mb-[2%]">
              Register to post your <br /> property for FREE
            </h2>
            <p className="text-[10px] lg:text-[18px] lg:w-[85%] text-gray-500">
              Post your residential / commercial property
            </p>
            <div className="mt-[8%]">
              <button type="submit" className="py-[14px] px-[30px] bg-[#1F1F1F] rounded-[40px] text-white mr-[18px]">
                Get a Quote
              </button>
              <button type="submit" className="py-[14px] px-[30px] bg-gray-400 rounded-[40px] text-black border-inherit">
                Get a Quote
              </button>
              <ul className="flex mt-[40px] mb-[40px] lg:mb-0">
                <li className="mr-[10%]">
                  <h3 id="customers" className="font-black text-[34px]">200+</h3>
                  <h4 className="text-[14px]">Property Listings</h4>
                </li>
                <li className="mr-[10%]">
                  <h3 id="offices" className="font-black text-[34px]">1000+</h3>
                  <h4 className="text-[14px]">Monthly Searches</h4>
                </li>
                <li className="mr-[10%]">
                  <h3 id="students" className="font-black text-[34px]">999+</h3>
                  <h4 className="text-[14px]">Owners advertise <br /> monthly</h4>
                </li>
              </ul>
            </div>
            <div className="w-[50%]">
              <h1 className="bg-[#0078DB] py-[4%] text-[18px] text-center text-white rounded font-bold">
                Post your property for FREE
              </h1>
            </div>
          </div>

          <div className="w-[100%] lg:w-[48%]">
            <Image
              src="/images/Group 20.png"
              alt="Property Image"
              className="rounded-lg w-full h-[350px] object-cover my-4"
              width={500}
              height={350}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default GlobalRealEstateBrokerageSection;
