import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Working from "./components/Working";
import FAQ from "./components/faq";

function App(){

  return(

    <div className="min-h-screen bg-white text-black">
    
     <Navbar/>
    <Hero/>
    <Working/>
    <FAQ/>
    <Footer/>
  
    </div>
)}

export default App;