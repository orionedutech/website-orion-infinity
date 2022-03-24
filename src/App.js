import "./App.css";
import "./default.css";
import { useState, useEffect } from "react";
import {Home} from './Pages'
// import { Footer, NavBar, MobileNavbar } from "./Components";
import {Footer, NavBar, MobileNavbar} from './Components'
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { pathname } = useLocation();

  function handleMobileMenuActive() {
    setMobileMenuActive(!mobileMenuActive);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <div className="App">
      <NavBar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      <MobileNavbar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
