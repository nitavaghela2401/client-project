import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">

      <Navbar />

      <Home />

      <Services />

      <About />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;