

import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ProjectContext } from '../context/ProjectContext'
import '../css/ProjectDetails.css'
import CircularProgress from './CircularProgress'



const ProjectDetail = function(){

    const { id } = useParams()    
    const { projects, addTask } = useContext(ProjectContext)
    const navigate = useNavigate()
    const [taskName, setTaskName] = useState('')

    const [task, setTask] = useState(() => {
    const saved = localStorage.getItem(`tasks-${id}`)
    return saved ? JSON.parse(saved) : []
})


    const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(`completed-${id}`)
    return saved ? JSON.parse(saved) : [] 
    })

    useEffect(() => {
    localStorage.setItem(`tasks-${id}`, JSON.stringify(task))
}, [task])

useEffect(() => {
    localStorage.setItem(`completed-${id}`, JSON.stringify(completed))
}, [completed])

    
     const project = projects.find((proj) => proj.id === Number(id))

     if (!project) {
    return <h2>Project not found</h2>
}

// const {handleDel, cancelAll, handleSubmit } = useContext(ProjectContext)

const handleInput = function(e){
    console.log(e.target.value)
    setTaskName(e.target.value)
}

const handleClick = function(e){
    setTask([...task, taskName])
    setTaskName("")
}

const handleTaskDel = function(index){

    setTask((prev) => prev.filter((t, n) => n !== index))
}

const handleComplete = function(index){

    const completedTask = task[index]
    setTask((prev) => prev.filter((n, i) => i !== index))
    setCompleted((prev) => [...prev, completedTask])

    console.log("Task Completed")
}

const taskCount = task.length + completed.length
const percentageCount = taskCount === 0 ? 0 : 
Math.round((completed.length / taskCount) * 100)

  return  <>
        <section className = 'project-details'>
            <header>
            <img src="/icons/left_arrow_icon.png" 
            alt="Left arrow icon"
            title = 'Go back'
            onClick = { ()=> navigate(-1)}
            className = 'back-arrow'
            />
            <div className = 'detailsHeader'>

            <h3 className = 'header-text'>{project.name}</h3>
           <CircularProgress percentage={percentageCount} />
            </div>
            </header>

            <main className = 'task-form'>
            <form onSubmit = {(e) => e.preventDefault()}>
                <input type="text" 
                placeholder = 'Enter your task'
                onChange = {handleInput}
                value = {taskName}
                />
                <button type = 'button'
                onClick = {handleClick}
                >Add Task</button>
            </form>
    {console.log(task)}
    
            <div className = 'taskContainer'>

            <h5>{project.category} Tasks</h5>

                { task.map((item, index) => <div className = 'task'
                key = {index}
                >
                    <div>
                    <input type="radio" 
                    onClick = {() => handleComplete(index)}
                    />
                    <p>{item}</p>
                    </div>
                    <img src="/icons/trash-solid-full.svg" 
                    alt="Delete icon"
                    title = 'Delete Task' 
                    onClick = {() => handleTaskDel(index)}
                    />
                </div> 
                ) }

            </div>


        <section className = 'completedSection'>
            <h3>COMPLETED TASKS</h3>

            <div className = 'completedContainer'>
                
                {completed.map((item, index) => (
            <div className='completedTask' key={index}>
                <div className = 'taskName'>
            <input type="radio" checked readOnly />
            <p>{item}</p>
            </div>

            <img src="/icons/trash-solid-full.svg" 
                    alt="Delete icon"
                    title = 'Delete Task' 
                    onClick = {() => handleTaskDel(index)}
                    />

        </div>
    ))}

        </div>
        </section>

        </main>

        </section>
  </>
    
}

export default ProjectDetail