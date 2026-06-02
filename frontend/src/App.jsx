import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Working from "./Working";
import FAQ from "./faq";

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