import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContexts';

import MainLayout from './components/Layout/MainLayout';
import AuthLayout from './components/Layout/AuthLayout';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public layout with Header/Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Page1 />} />

        {/* Protected Routes */}
        <Route
          path="/page2"
          element={isAuthenticated ? <Page2 /> : <Navigate to="/login" replace />}
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
