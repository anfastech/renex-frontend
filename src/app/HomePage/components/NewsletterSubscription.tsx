import React from 'react';

const NewsletterSubscription: React.FC = () => {
    return (
        <section className="mt-10 container mx-auto px-4 lg:px-0 rounded-2xl py-12" >
            <section className="flex flex-col lg:flex-row lg:justify-between items-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg" style={{
                background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)',
            }}>
                {/* Text and Form Section */}
                <div className="w-full lg:w-2/5 lg:pl-8 mb-8 lg:mb-0">
                    <h1 className="text-2xl mb-2 pt-8 md:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
                        Subscribe Our Newsletter
                    </h1>
                    <p className="text-xs lg:text-base mb-8 text-gray-700">
                        Ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque
                        sollicitudin. Egestas faucibus lacus diam in senectus consectetur.
                        Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                    </p>
                    <form action="" className="mb-10">
                        <div className="flex-1 lg:justify-between relative w-full">
                            <input type="text" placeholder="Enter Your Email" className="outline-none w-full lg:w-[90%] h-[50px] p text-black rounded-[40px] py-[18px] pl-[24px] relative" />
                                <button type="submit" className="py-[14px] px-[30px] bg-[#1F1F1F] rounded-[40px] absolute right-0 lg:right-[0px] text-white">Get a Quote</button>
                        </div>
                    </form>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-4/5">
                    <img
                        src="./images/3d-rendering-isometric-fdgdf 1.png"
                        alt="3D Rendering"
                        className="w-full object-cover rounded-lg lg:h-96 lg:object-contain"
                    />
                </div>
            </section>
        </section>
    );
};

export default NewsletterSubscription;
