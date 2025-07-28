import { useAuth } from '../context/AuthContexts';
import { Link } from 'react-router-dom';

export default function Page1() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>

      {isAuthenticated ? (
        <button
          onClick={logout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      )}
    </div>
  );
}
