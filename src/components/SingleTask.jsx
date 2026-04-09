import '../css/TaskAdd.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'
import { useNavigate } from 'react-router-dom'
import CircularProgress from './CircularProgress'



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
               
            <h5>{name}</h5>
           

            <div className = 'percentage-container'>

                    <CircularProgress percentage={percentageCount} />
                    <p className = 'percentage-text'>
                        {percentageCount}%
                    </p>

            </div>

            <div className = 'category-section'>

             <p>{category}</p>

             <img src="/icons/red trash icon.png"
            alt="Delete"
            className = 'trash-icon'
            onClick={(e) => {
                e.stopPropagation()  
                handleDel(index)
            }}
            />
                </div>



            </div>


    </>
}

export default SingleTask