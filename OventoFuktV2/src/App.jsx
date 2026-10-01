import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Team from "./pages/Team";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/om-oss"
              element={<About />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/kontakt"
              element={<Contact />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/team"
              element={<Team />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
