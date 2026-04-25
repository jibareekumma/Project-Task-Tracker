import '../css/TaskAdd.css'
import '../css/singleTaskModal.css'
// import dummyLoading from '../icons/dummy-loading.jpeg'
import { useNavigate } from 'react-router-dom'
import CircularProgress from './CircularProgress'
import { ProjectContext } from '../context/ProjectContext'
import { useContext, useState } from 'react'



const SingleTask = function( {name, category, handleDel, index, id} ){

    const { editProjectName } = useContext(ProjectContext)

    const navigate = useNavigate()

    const saved = localStorage.getItem(`tasks-${id}`)
const savedCompleted = localStorage.getItem(`completed-${id}`)

const tasks = saved ? JSON.parse(saved) : []
const completed = savedCompleted ? JSON.parse(savedCompleted) : []

const totalCount = tasks.length + completed.length
const percentageCount = totalCount === 0 ? 0 : Math.round((completed.length / totalCount) * 100)

const [newName, setNewName] = useState('')

const [showModal, setShowModal] = useState(false)

const displayModal = function(){
    setShowModal(true);
}

const closeModal = function(){
    setShowModal(false)
}

const [showToast, setShowToast] = useState(false)
    const [toastLoader, setToastLoader] = useState(0)

const handleEdit = function(e) {
    e.stopPropagation()
    if (newName.trim() === '') return  
    editProjectName(id, newName)       
    setNewName('')                     
    setShowModal(false)   
    
    setToastLoader((prev) => prev + 1)

    setShowToast(true)
    setTimeout(function(){
        setShowToast(false)  
    }, 5000)
}


    return <>

            
        <div className='singleTask' 
            onClick={() => navigate(`/project/${id}`)}>
               
               <div className = 'single-task-headers'>
            <h5>{name}</h5>
            <img 
            onClick = { (e) => {
                e.stopPropagation();
                displayModal()
            }}
                className = 'pencil-icon'
            src="icons/pencil-icon.svg" 
            alt="Edit Project Name"
            title = 'Edit Project Name'
            fill="#7c6fcd"
            />
           </div>
           

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
                handleDel(id)
            }}
            />
                </div>



            </div>


           
                    <form action="" className = 'singleTask-modal'
                        style={{ display: showModal ? 'flex' : 'none' }}
                    >

                        <input type="text" 
                        placeholder = 'Enter project Name'
                        value = {newName}
                        onChange = {(e) => setNewName(e.target.value)}
                        />
                        <button
                        onClick = {handleEdit}
                        >Modify</button>
                    </form>


                    <div className = 'singleTask-backdrop'
                    onClick = {closeModal}
                        style={{ display: showModal ? 'flex' : 'none' }}
                    ></div>

           
    <div className="toast" style={{ display: showToast ? 'flex' : 'none' }}>
    <p>Your project has been edited Successfully!!!</p>
    {showToast && (  
        <div className='toastLoader'></div>
    )}
</div>

        <div className = 'toastBackdrop'
        style = {{ display: showToast ? 'flex' : 'none'}}
        onClick = { () => setShowToast(false)}
        >
        </div>

    </>
}

export default SingleTask