// import "../css/Header"
import "../css/Header.css"

const Header = function(){

    return <header>
        <div className = "upper-div">
            <div className = "header-text">
                <h4>Good Morning, User</h4>
                <p>Saturday, 14 march</p>
            </div>
            <button className = "clear-btn"> Clear All</button>
        </div>

            <h3 className = "greeting-text">
                Let's Build Something
                <br />
                <span>    Great today! </span>
            </h3>
    </header>
}

export default Header