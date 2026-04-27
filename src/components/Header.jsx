// import "../css/Header"

import { useAuth } from "../context/AuthContext/index.jsx"

import "../css/Header.css"
import "../css/DarkMode.css"
import DarkMode from "./DarkMode"
import { doSignOut } from '../config/auth.js'
import { useNavigate } from "react-router-dom"

const Header = function( {cancelAll} ){

    const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
    
})

const navigate = useNavigate();

const { currentUser } = useAuth()
    const username = currentUser?.displayName || "User"

    return <header className = "first-page-header">
        <div className = "upper-div">
            <div className = "header-text">
                <h4>Good Morning, { username }</h4>
                <p>{today}</p>
            </div>

            <div className = 'upper-div-btns'>
            <button className = "clear-btn" 
                onClick = {cancelAll}
            > Clear All</button>
            <button 
        onClick={() => doSignOut().then(() => navigate('/login'))}
        >Sign Out</button>
        </div>
        </div>


        <div className = 'text-section'>
            <h3 className = "greeting-text">
                Let's Build Something
                <br />
                <span>    Great today! </span>
            </h3>
           <DarkMode />
            </div>
    </header>
}

export default Header