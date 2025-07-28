import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContexts";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="w-full h-[80px] bg-gray-200 text-white p-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="flex gap-6 justify-end mt-3 mr-4">
        <Link to="/" className="text-purple-500 text-lg font-semibold">
          Home
        </Link>

        {isAuthenticated && (
          <>
            <Link to="/page2" className="text-purple-500 text-lg font-semibold">
              Page 2
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
