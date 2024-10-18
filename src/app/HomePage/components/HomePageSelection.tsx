import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HomePageSelection = ({ label = "Featured Location", redirectUrl = 'searchTest.html' }) => {
    const handleClick = () => {
        // Action when clicked (redirection)
        window.location.href = redirectUrl; // Redirects to the specified URL
    };

    return (
        <div
            className="w-90 p-4 bg-gray-300 rounded-lg border border-gray-400 cursor-pointer flex justify-between items-center"
            onClick={handleClick} // Attach click event handler
        >
            <span className="text-gray-500">{label}</span> {/* Display the label prop */}
            <FontAwesomeIcon icon={faAngleDown} className="text-gray-500" /> {/* Font Awesome arrow icon */}
        </div>
    );
};

export default HomePageSelection;
