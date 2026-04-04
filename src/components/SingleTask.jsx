import '../css/TaskAdd.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'
import { useNavigate } from 'react-router-dom'



const SingleTask = function( {name, category, handleDel, index, id} ){

    const navigate = useNavigate()

    const saved = localStorage.getItem(`tasks-${id}`)
const savedCompleted = localStorage.getItem(`completed-${id}`)

const tasks = saved ? JSON.parse(saved) : []
const completed = savedCompleted ? JSON.parse(savedCompleted) : []

const totalCount = tasks.length + completed.length
const percentageCount = totalCount === 0 ? 0 : Math.round((completed.length / totalCount) * 100)


    return <>

            
        <div className='singleTask' 
            onClick={() => navigate(`/project/${id}`)}>
               <div className = 'task-headers'>
            <h5>{name}</h5>

             <img src="/icons/trash-solid-full.svg"
            alt="Delete"
            className = 'trash-icon'
            onClick={(e) => {
                e.stopPropagation()  
                handleDel(index)
            }}
            />
            </div>


            <div className = 'task-footers'>

            <p>{category}</p>
           
                    <div className = 'task-icons'>
                    <span className ='circle-icons'>
                    </span>
                    <p className = 'percentage-text'>
                        {percentageCount}%
                    </p>
                    </div>
            </div>

            </div>

    </>
}

export default SingleTask