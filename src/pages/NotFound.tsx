import { useAuth } from '../context/AuthContexts';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4 text-gray-700">Page Not Found</p>
        <Link
          to='/'
          className="text-blue-600 hover:underline mt-4 block"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
