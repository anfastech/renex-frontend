import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface HomePageSelectionProps {
  label: string;
  redirectUrl: string;
  className?: string; // Optional prop for additional classes
}

const HomePageSelection = ({
  label = "Featured Location",
  redirectUrl = "searchTest.html",
  className = "", // Ensure it has a default empty string
}: HomePageSelectionProps) => {
  const handleClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div
      className={`w-90 p-4 bg-gray-300 rounded-lg border border-gray-400 cursor-pointer flex justify-between items-center ${className}`}
      onClick={handleClick}
    >
      <span className={`text-gray-500 ${className}`}>{label}</span>
      <FontAwesomeIcon icon={faAngleDown} className={`text-gray-500 ${className}`} />
    </div>
  );
};

export default HomePageSelection;
