import "./App.css";
import Header from "./Component/NavBar/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServiceDetails from "./Pages/ServiceDetails";
import CheckOutPage from "./Pages/CheckOutPage";
import Account from "./Pages/Account";
import Footer from "./Component/Footer";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import { useEffect, useState } from "react";
import AppHome from "./Pages/AppHome";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import ForgotPassword from "./Component/account/ForgotPassword";
import BookingHistory from "./Component/Profile/BookingHistory";
import ProfileMain from "./Component/Profile/ProfileMain";
import CategoryPage from "./Pages/CategoryPage";
import ResetPassord from "./Component/account/ResetPassord";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Update state for mobile breakpoint
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/app-home"
            element={
              <>
                <AppHome />
              </>
            }
          />
          <Route
            path="/salon-for-hair-treatment-matunga"
            element={
              <>
                <Header />
                <CategoryPage />
                <Footer />
              </>
            }
          />
          {/* <Route path='/service' element={<><Header /><ServicePage /><Footer /></>} /> */}
          <Route
            path="/service-details"
            element={
              <>
                <Header />
                <ServiceDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/appointment"
            element={
              <>
                <Header />
                <CheckOutPage />
                <Footer />
              </>
            }
          />
          <Route path="/account/:page" element={<Account />} />
          <Route path="/account/forgot-password" element={<ForgotPassword />} />
          <Route path="/account/reset-password" element={<ResetPassord />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route
            path="/profile-details"
            element={
              <>
                {" "}
                <Header />
                <ProfileMain />
                <Footer />
              </>
            }
          />
          <Route
            path="/hair-cutting-salon-matunga"
            element={
              <>
                <Header />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/hair-salon-near-matunga"
            element={
              <>
                <Header />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <>
                <Header />
                <TermsConditions />
                <Footer />
              </>
            }
          />

          <Route
            path="/service-category"
            element={
              <>
                <Header />
                <CategoryPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
