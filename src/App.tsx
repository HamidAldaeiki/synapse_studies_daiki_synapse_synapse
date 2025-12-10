import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Studies from "./pages/Studies";
import Services from "./pages/Services";
import About from "./pages/About";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "cv":
        return <CV />;
      case "publications":
        return <Publications />;
      case "projects":
        return <Projects />;
      case "studies":
        return <Studies />;
      case "services":
        return <Services />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white" dir="rtl">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
