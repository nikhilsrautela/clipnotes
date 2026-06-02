
    // const [theme, setTheme] = useState("light");

    // const toggleTheme = ()=>{
    //     const newTheme = theme === 'light' ? 'dark' : 'light';  
    //     setTheme(newTheme);
    //     document.documentElement.classList.toggle("dark", newTheme==="dark");
    //     localStorage.setItem("theme", newTheme);
    // };

    // useEffect(()=>{
    //     const storedTheme = localStorage.getItem('theme') || "light";
    //     setTheme(storedTheme);
    //     document.documentElement.classList.toggle("dark", storedTheme==="dark");
    // },[])


    
    //         <button onClick={toggleTheme} className="rounded-full p-2 shadow-md shadow-purple-400 cursor-pointer text-gray-600  hover:text-purple-400 transition-all ease-in-out dark:bg-white dark:shadow-amber-400 dark:hover:text-amber-400">{ theme=== 'light' ? <Moon/> : <Sun/>}</button>