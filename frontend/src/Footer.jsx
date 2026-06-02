export default function Footer(){

    return(
<>  <hr class="border-t border-gray-500 mx-15"></hr>

<footer className="bg-gray-100 dark:bg-white text-[#101828] dark:text-[#101828] py-8 font-ppeditorialold">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Logo / Brand */}
    <div>
      <h2 className="text-2xl font-bold">clipnotes.</h2>
      <p className="text-sm mt-1">
        Smarter notes powered by AI.
      </p>
    </div>


    {/* Copyright */}
    <div className="text-sm text-center md:text-right">
      © {new Date().getFullYear()} clipnote.
    </div>

  </div>
  
</footer>
</>

    )
}