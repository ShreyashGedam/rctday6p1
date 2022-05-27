import { useContext } from "react"
import { ThemeContext } from "../context/themcontext"
import style from "./navbar.module.css"

export const Navbar = () => {

    const [theme , toggleTheme] = useContext(ThemeContext)

    return ( 
        <div className={`${style.basic} ${theme == "light" ? style.basiclight : style.basicdark}`}>
            <button onClick={toggleTheme} className={`${style.buttonbasic} ${theme == "light" ? style.buttonlight : style.buttondark}`}>Theme</button>

        </div>
    )
}