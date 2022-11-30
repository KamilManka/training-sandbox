import { createContext,useState,useContext } from "react"

const ThemeContext=createContext(undefined)

export const ThemeProvider=({children})=>{
    const [isDarkTheme,setIsDarkTheme]=useState(false)

    const toggleTheme=()=>{
        setIsDarkTheme(prev=>!prev)
    }

    return <ThemeContext.Provider value={{isDarkTheme,toggleTheme}}>{children}</ThemeContext.Provider>
}
export const useThemeContext=()=>{
    const ctx=useContext(ThemeContext)

    if(!ctx){
        throw new Error("Missing themeContext it's not wrapped in ThemeProvider")
    }
    return ctx;
}