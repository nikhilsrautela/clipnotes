import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png"
import gif from "../assets/giphy.gif"

export default function Navbar() {

  return (
    <div className="relative h-screen font-ppeditorialold bg-white">

      
        <img src={gif}alt="hero" className="absolute inset-0 w-full h-full object-cover z-0" />    
            <div className="absolute inset-0 bg-black/40 z-10" />


        <nav className="absolute top-0 left-0 right-0 z-99 flex items-start justify-between px-6 mx-16">
                
              <div>
                <img src={logo} className="h-10 w-auto cursor-pointer m-1 sm:h-15"></img>
              </div>
            
              <div className="flex">

                <ul className="flex gap-8 text-white text-[18px] pt-5">
                    <li className="cursor-pointer"><a href="#working">How it works</a></li>
                    <li className="cursor-pointer"><a href="#faq">FAQ</a></li>
                </ul>

              
                <div className="m-3">

                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-black text-[#FFF0CF] p-2 w-30 cursor-pointer rounded-2xl transition hover:scale-110 hover:bg-indigo-500">Login/Signup</button>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn> <UserButton /> </SignedIn>
                    
                </div>
              </div>

            
       </nav>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
              <h1 className="text-7xl font-ppeditorialold">Don’t just watch videos.<br></br>Understand them.</h1>  
            </div>

    </div>
  )
}




