import React from 'react';

const RenexCard: React.FC = () => {
    return (
        <>
            {/* Gap */}
            <div className="h-8"></div>
            <div className="h-16"></div>

            <section>
                {/* Product Card 1 */}
                <div className="relative bg-gray-300 h-56 flex-col rounded-lg justify-between border border-gray-400 m-2">
                    <div className="flex-1 p-3">
                        <h2 className="text-xl font-bold">Links</h2>
                        <p className="text-gray-700">Owners</p>
                        <button className="text-gray-500 mt-3">Privacy Policies</button>
                        <div className="text-gray-500 mt-2 mb-8">
                            Copyright &copy; <span className="text-gray-700">renex.app</span> | Licence Received
                        </div>
                        <div className="h-16"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RenexCard;
