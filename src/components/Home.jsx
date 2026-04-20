

import "../css/Home.css"

const Home = function(){

    return <>


        <section>
            <header>
                TrackNest 

                <div className = 'hamburger-menu'>
                   <img src="/icons/hamburger-icon.png" 
                   alt="hamburger Menu" />
                </div>

            </header>

            <main>
                <h3>Stay Organized</h3>
                <h4>Stay Ahead</h4>
            </main>

            <div className = 'review-index'>
                <div className = 'text-container'>
                    <h2>6M</h2><span>+</span>
                    <p>Active Users</p>
                </div>

                <div className = 'image-container'>
                    <img src="/photos/home-page photo 1 animated.png" 
                    alt="GYM Lady Tying her sneekers" />
                </div>
            </div>

        </section>


        <section>

            <div className = 'text-section'>
                <p>Organize every project, 
                    track every task, 
                    and watch progress grow smoothly 
                    from idea to completion in one simple 
                    workspace.</p>
            </div>

            <div className = 'icons-section'>
                <div className = 'social-icon'
                href="">
                    <img src="/icons/github icon.png" 
                    alt="Github Icon" />
                </div>
                <div className = 'social-icon'
                href="">
                    <img src="/icons/x icon.png" 
                    alt="Twitter Icon" />
                </div>
                <div className = 'social-icon'
                href="">
                    <img src="/icons/reddit icon.png" 
                    alt="reddit Icon" />
                </div>
                <div className = 'social-icon'
                href="">
                    <img src="/icons/instagram icon.png" 
                    alt="instagram Icon" />
                </div>
            </div>
        </section>
    </>
}



export default Home