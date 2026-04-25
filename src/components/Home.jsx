


import { useState } from "react"
import "../css/Home.css"
import { useNavigate } from "react-router-dom"

const Home = function(){

    const [menuOpen, setMenuOpen] = useState(false)

    const navigate = useNavigate()

    return <>

        <div className="main-container" id="home-page">

        <section className='section1'>
            <div id='container'>
            <header>
                <h1>TrackNest</h1>

                <div className='hamburger-menu'>
                    <img
                        src="/icons/hamburger-icon.png"
                        alt="hamburger Menu"
                        onClick={() => setMenuOpen(true)}
                    />
                    {menuOpen && (
                        <div
                            className="backdrop"
                            onClick={() => setMenuOpen(false)}
                        />
                    )}
                    <ul className={`menu-container ${menuOpen ? "open" : ""}`}>
                        <button
                            className="close-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>
                        <li>About Us</li>
                        <li onClick = {() => navigate("/login") }> 
                            Sign In</li>
                        <li onClick = {() => navigate("/register")}>Sign Up</li>
                    </ul>
                </div>
            </header>

            {/* <main>
                <h3>Stay Organized</h3>
                <h4>Stay Ahead</h4>
            </main> */}
            </div>

            <div className='review-index'>
                <div className='text-container'>
                    <div>
                    <h2>6M<span>+</span></h2>
                    <p>Active Users</p>
                    </div>
                    <img src="/icons/progress bar home.png" alt="" />
                </div>
                <div className='image-container'>
                    <img src="/photos/home-photo 2.png" 
                    alt="Productivity management photo" />
                </div>
            </div>
        </section>

        <section className='section2'>
            <div className='text-section'>
                <p>Organize every project,
                    track every task,
                    and watch progress grow smoothly
                    from idea to completion in one simple
                    workspace.</p>
            </div>
            <div className='icons-section'>
                <a className='social-icon' href="https://github.com/jibareekumma">
                <img src="/icons/github icon.png" alt="Github Icon" /></a>
                <a className='social-icon' href="https://x.com/devjibare">
                <img src="/icons/x icon.png" alt="Twitter Icon" /></a>
                <a className='social-icon' href="https://www.threads.com/@dev_jibare01?igshid=NTc4MTIwNjQ2YQ==">
                    <img src="/icons/thread logo.png" alt="thread Icon" /></a>
                <a className='social-icon' href="https://www.instagram.com/dev_jibare01?igsh=OWtpeGZubThldG5l&utm_source=qr">
                    <img src="/icons/instagram icon.png" alt="instagram Icon" /></a>
            </div>
        </section>

        <section className='section1 dsk-hero'>
            <nav className="dsk-nav">
                <h1 className="dsk-logo">TrackNest</h1>
                <ul className="dsk-nav-links">
                    <li className="dsk-nav-active">Home</li>
                    <li>About Us</li>
                    <li onClick = {() => navigate("/register")}>Register</li>
                    <li>Login</li>
                </ul>
                <button className="dsk-nav-btn"
                    onClick = {() => navigate("/register")}
                >Sign Up</button>
            </nav>
            {/* <div className="dsk-hero-text">
                <h2>Stay Organized</h2>
                <h2>Stay Ahead</h2>
            </div> */}
            <div className="dsk-hero-badge">
                <span className="dsk-badge-number">6M<span className="dsk-badge-plus">+</span></span>
                <p className="dsk-badge-label">Active Users</p>
                <div className="dsk-avatar-strip"></div>
            </div>
        </section>

        <section className='section2 dsk-section2'>

            
            
                <img className = 'dsk-card-placeholder'
                
                src="public/photos/home-photo 2.png" alt="" />
            
                   

            <div className="dsk-info-side">
                <p className="dsk-info-text">
                    Organize every project, track every task,
                    and watch progress grow smoothly from idea
                    to completion in one simple workspace.
                </p>
                <div className="dsk-icons-row">
                    <a className='social-icon' href=""><img src="/icons/github icon.png" alt="Github Icon" /></a>
                    <a className='social-icon' href=""><img src="/icons/x icon.png" alt="Twitter Icon" /></a>
                    <a className='social-icon' href=""><img src="/icons/reddit icon.png" alt="reddit Icon" /></a>
                    <a className='social-icon' href=""><img src="/icons/instagram icon.png" alt="instagram Icon" /></a>
                </div>
                <div className="dsk-stat-block">
                    <span className="dsk-stat-number">92.5<span className="dsk-stat-pct">%</span></span>
                    <p className="dsk-stat-label">Users report <strong>improved</strong> productivity habits</p>
                </div>
            </div>
        </section>

        </div>
    </>
}

export default Home