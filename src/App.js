// App.jsx
import { useContext, useEffect} from "react";
import { Context } from "./index"; // Import the context
import Cookies from "js-cookie";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from './pages/Appointment';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Otp from "./pages/Otp";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // Optional: sync cookies to context on reload
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return (
    <>
      {isAuthenticated && <Navbar isLoggedIn={isAuthenticated} setIsLoggedIn={setIsAuthenticated} />}

      <ScrollToTop />

      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login setIsLoggedIn={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsAuthenticated} />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
