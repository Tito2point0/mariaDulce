import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
// import Contact from "./pages/ContactUs";

// Dummy pages for navigation
const Gallery = () => <div className="text-center p-10 text-3xl">🖼 Gallery</div>;

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}