import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
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
            path="/omOss"
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
    </>
  );
}

export default App;
