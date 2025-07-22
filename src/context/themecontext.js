
import { createContext ,useContext} from "react";

const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})


const ThemeProvider = ThemeContext.Provider;

export default ThemeProvider

 export const useTheme = ()=>{
    return useContext(ThemeContext)
}

