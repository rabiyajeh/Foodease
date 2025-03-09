import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import OrderHistory from "./pages/OrderHistory";
import AdminDashboard from "./admin/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal"; // Import Auth Modal

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
};

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? children : <Navigate to="/" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setRole(null);
    window.location.href = "/";
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} role={role} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPage setAuthModalOpen={setAuthModalOpen} />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><OrderHistory /></PrivateRoute>} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </>
  );
}

export default App;
