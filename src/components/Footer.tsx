import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faPlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 px-8 py-0 shadow-lg" style={{zIndex: "5"}}>
            <div className="flex justify-between items-center py-2">

                {/* Home Icon */}
                <a href="/">
                    <button className="focus:outline-none hover:text-blue-600">
                        <FontAwesomeIcon icon={faHouse} fixedWidth className="w-8 h-10" />
                    </button>
                </a>

                {/* Search Icon */}
                <a href="/SearchPage">
                    <button className="focus:outline-none hover:text-blue-600">
                        <FontAwesomeIcon icon={faSearch} fixedWidth className="w-10 h-10" />
                    </button>
                </a>

                {/* Plus Icon */}
                <button className="bg-blue-500 text-white rounded-full focus:outline-none w-14 h-14 grid place-items-center">
                    <FontAwesomeIcon icon={faPlus} fixedWidth className="w-10 h-10" />
                </button>

                {/* Star Icon */}
                <button className="focus:outline-none hover:text-blue-600">
                    <FontAwesomeIcon icon={faStar} fixedWidth className="w-9 h-9" />
                </button>

                {/* User Icon */}
                <button className="focus:outline-none hover:text-blue-600">
                    <FontAwesomeIcon icon={faUser} fixedWidth className="w-5 h-5" />
                </button>

            </div>
        </footer>
    );
}






// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faSearch, faPlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

// export default function Footer() {
//     return (
//         <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 shadow-lg">
//             <div className="flex justify-between items-center">
//                 {/* Home Icon */}
//                 <a href="./index.html">
//                     <button className="focus:outline-none hover:text-blue-600">
//                         <FontAwesomeIcon icon={faHome} size="2x" />
//                     </button>
//                 </a>

//                 {/* Search Icon */}
//                 <a href="./searchFunction.html">
//                     <button className="focus:outline-none hover:text-blue-600">
//                         <FontAwesomeIcon icon={faSearch} size="2x" />
//                     </button>
//                 </a>

//                 {/* Plus Icon */}
//                 <button className="bg-blue-500 text-white p-4 rounded-full focus:outline-none">
//                     <FontAwesomeIcon icon={faPlus} size="2x" />
//                 </button>

//                 {/* Star Icon */}
//                 <button className="focus:outline-none hover:text-blue-600">
//                     <FontAwesomeIcon icon={faStar} size="2x" />
//                 </button>

//                 {/* User Icon */}
//                 <button className="focus:outline-none hover:text-blue-600">
//                     <FontAwesomeIcon icon={faUser} size="2x" />
//                 </button>
//             </div>
//         </footer>
//     );
// }
