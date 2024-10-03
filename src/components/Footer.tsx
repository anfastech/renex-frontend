import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartLine } from '@fortawesome/free-solid-svg-icons'; // solid icons
import { faLightbulb, faStar, faAddressCard } from '@fortawesome/free-regular-svg-icons'; // regular icons

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-10">
            <div className="flex justify-around items-center px-4 py-3 md:py-4">
                
                {/* Home Icon */}
                <div className="text-center">
                    <button className="focus:outline-none hover:text-blue-600 active:text-blue-600">
                        <FontAwesomeIcon icon={faHouse} fixedWidth size="lg" className="text-blue-600" />
                        <p className="text-[10px] md:text-xs font-semibold">Home</p>
                    </button>
                </div>

                {/* Insights Icon */}
                <div className="text-center">
                    <button className="focus:outline-none hover:text-blue-600 active:text-blue-600"> 
                        <FontAwesomeIcon icon={faLightbulb} fixedWidth size="lg" />
                        <p className="text-[10px] md:text-xs">Insights</p>
                    </button>
                </div>

                {/* Shortlisted Icon */}
                <div className="text-center">
                    <button className="focus:outline-none hover:text-blue-600 active:text-blue-600"> 
                        <FontAwesomeIcon icon={faStar} fixedWidth size="lg" />
                        <p className="text-[10px] md:text-xs">Shortlisted</p>
                    </button>
                </div>

                {/* Activity Icon */}
                <div className="text-center">
                    <button className="focus:outline-none hover:text-blue-600 active:text-blue-600"> 
                        <FontAwesomeIcon icon={faChartLine} fixedWidth size="lg" />
                        <p className="text-[10px] md:text-xs">Activity</p>
                    </button>
                </div>

                {/* Profile Icon */}
                <div className="text-center">
                    <button className="focus:outline-none hover:text-blue-600 active:text-blue-600"> 
                        <FontAwesomeIcon icon={faAddressCard} fixedWidth size="lg" />
                        <p className="text-[10px] md:text-xs">Profile</p>
                    </button>
                </div>
            </div>
        </footer>
    );
}
