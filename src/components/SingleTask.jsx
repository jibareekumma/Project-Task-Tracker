import '../css/TaskAdd.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'
import { useNavigate } from 'react-router-dom'


const SingleTask = function( {name, category, handleDel, index, id} ){

    const navigate = useNavigate()

    const test = function(){
        console.log("Logged IN")
    }

    return <>

             <div className = 'mainContainer'>

            <div className = 'nameContainer'>
    
            <h5> {name} </h5>
            <div className = "icons">
            <img src="icons/trash-solid-full.svg" 
            alt="Trash Icon" 
            title = 'Delete project'
            onClick = { () => handleDel(index)}
            />
            <img src="icons/open page icon.png" 
            alt="Open Page Icon" 
            title='Open project'
            onClick = { ()=> navigate(`/project/${id}`)}
            />
            </div>

            </div>
            
            <div>
            <div className = 'percentageSec'>
                
                    <h6> {category} </h6>
                    <p>0%</p>
                    
            </div>
            
            </div>
        </div>
    </>
}

export default SingleTask