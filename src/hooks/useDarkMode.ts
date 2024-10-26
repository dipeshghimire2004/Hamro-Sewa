import React, {useEffect, useState} from 'react'


const useDarkMode=()=>{
    const [isDarkMode, setIsDarkMode]=useState<boolean>(()=>localStorage.getItem('theme')==="dark");

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme",'dark');
        }
        else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
    },[isDarkMode]);

    const toggleDarkMode=()=>setIsDarkMode(!isDarkMode);

return{isDarkMode, toggleDarkMode}

}
export default useDarkMode