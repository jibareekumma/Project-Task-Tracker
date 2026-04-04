// import "../css/Header"
import "../css/Header.css"

const Header = function( {cancelAll} ){

    return <header className = "first-page-header">
        <div className = "upper-div">
            <div className = "header-text">
                <h4>Good Morning, User</h4>
                <p>Saturday, 14 march</p>
            </div>
            <button className = "clear-btn" 
                onClick = {cancelAll}
            > Clear All</button>
        </div>


        <div className = 'text-section'>
            <h3 className = "greeting-text">
                Let's Build Something
                <br />
                <span>    Great today! </span>
            </h3>
            </div>
    </header>
}

export default Header