import { qstate } from "../assets"; // Make sure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OnlyLogo = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" onClick={() => navigate("/")}>
          <img src={qstate} width={190} height={40} alt="Brainwave" />
          {/* Test with a hardcoded image URL */}
          {/* <img src="https://example.com/test-image.png" width={190} height={40} alt="Test" /> */}
        </a>
      </div>
    </div>
  );
};

export default OnlyLogo;
