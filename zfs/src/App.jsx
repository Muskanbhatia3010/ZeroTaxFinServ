import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import ServiceDetail from "./pages/ServiceDetail";
// import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";
// import Resources from "./pages/Resources";

export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
