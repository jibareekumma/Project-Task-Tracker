// import trackIcon from '../icons/progress-icon.png'
import '../css/EntireTask.css'
import { useNavigate } from 'react-router-dom'

const EntireTask = function( {name, category, handleDel, index, id} ){

    const navigate = useNavigate()

    return <>

    <main>

        <div className = 'taskContainerM'>
            
            <div className = 'heading'>
                
                <div className = 'iconContainer'>
                <span>
                <img src = 'icons/progress-icon.png' 
                alt = "Tracking Icon" />
                </span>
                <h6>Track Your Progress</h6>
                </div>
               <div className = 'percentageContainer'>0%</div>

            </div>

            <div className = 'details'>

                <div className ='texts'>
                <h5> {name} </h5>
                <p> {category} </p>
                </div>
                
                    <div className='icons'>

                    <img src="icons/trash-solid-full.svg" 
                    alt="Right Arrow Icon" 
                    title='Delete Project'
                    onClick = {() => handleDel(index)}/>

                    <img src="icons/open page icon.png" 
                    alt="Open Page Icon" 
                  title='Open project' 
                   onClick = {()=> navigate(`/project/${id}`)}
                  />
                    </div>

            </div>

        </div>

            </main>
        
    </>
}

export default EntireTask 