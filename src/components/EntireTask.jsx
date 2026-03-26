// import trackIcon from '../icons/progress-icon.png'
import '../css/EntireTask.css'

const EntireTask = function( {name, category, handleDel, index} ){

    return <>

    <main>

        <div className = 'taskContainerM'>
            
            <div className = 'heading'>
                <span>
                <img src = 'icons/progress-icon.png' 
                alt = "Tracking Icon" />
                </span>
                <h6>Track Your Progress</h6>
            </div>

            <div className = 'details'>

                <div className ='texts'>
                <h5> {name} </h5>
                <p> {category} </p>
                </div>
                <button>
                    <img src="icons/right-arrow-icon.png" 
                    alt="Right Arrow Icon" />
                </button>
            </div>
        </div>

            </main>
        
    </>
}

export default EntireTask 