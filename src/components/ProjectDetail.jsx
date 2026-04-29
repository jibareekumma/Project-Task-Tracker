

import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ProjectContext } from '../context/ProjectContext'
import '../css/ProjectDetails.css'
import CircularProgress from './CircularProgress'
import { db } from '../config/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext/index.jsx'


const ProjectDetail = function(){

    const { id } = useParams()
    const { projects } = useContext(ProjectContext)
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const [taskName, setTaskName] = useState('')
    const [task, setTask] = useState([])
    const [completed, setCompleted] = useState([])

    const project = projects.find((proj) => String(proj.id) === String(id))

   
    useEffect(() => {
        if (project) {
            setTask(project.task ?? [])
            setCompleted(project.completed ?? [])
        }
    }, [project])

    
    const saveToFirestore = async function(updatedTasks, updatedCompleted) {
        if (!currentUser) return
        const projectDoc = doc(db, 'users', currentUser.uid, 'projects', id)
        await updateDoc(projectDoc, {
            task: updatedTasks,
            completed: updatedCompleted
        })
    }

    if (!project) {
        return <h2>Project not found</h2>
    }

    const handleInput = function(e){
        setTaskName(e.target.value)
    }

    const handleClick = function(){
        if (taskName.trim() === '') return
        const updatedTasks = [...task, taskName]
        setTask(updatedTasks)
        setTaskName('')
        saveToFirestore(updatedTasks, completed)
    }

  
    const handleTaskDel = function(index){
        const updatedTasks = task.filter((_, n) => n !== index)
        setTask(updatedTasks)
        saveToFirestore(updatedTasks, completed)
    }

   
    const handleCompletedDel = function(index){
        const updatedCompleted = completed.filter((_, i) => i !== index)
        setCompleted(updatedCompleted)
        saveToFirestore(task, updatedCompleted)
    }

    
    const handleComplete = function(index){
        const completedTask = task[index]
        const updatedTasks = task.filter((_, i) => i !== index)
        const updatedCompleted = [...completed, completedTask]
        setTask(updatedTasks)
        setCompleted(updatedCompleted)
        saveToFirestore(updatedTasks, updatedCompleted)
    }

    const taskCount = task.length + completed.length
    const percentageCount = taskCount === 0 ? 0 :
        Math.round((completed.length / taskCount) * 100)

    return <>
        <section className='project-details'>
            <header>
                <img src="/icons/left_arrow_icon.png"
                    alt="Left arrow icon"
                    title='Go back'
                    onClick={() => navigate(-1)}
                    className='back-arrow'
                />
                <div className='detailsHeader'>
                    <h3 className='header-text'>{project.name}</h3>
                    <CircularProgress percentage={percentageCount} />
                </div>
            </header>

            <main className='task-form'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"
                        placeholder='Enter your task'
                        onChange={handleInput}
                        value={taskName}
                    />
                    <button type='button' onClick={handleClick}>
                        Add Task
                    </button>
                </form>

                <div className='taskContainer'>
                    <h5>{project.category} Tasks</h5>

                    {task.map((item, index) => (
                        <div className='task' key={index}>
                            <div>
                                <input type="radio"
                                    onClick={() => handleComplete(index)}
                                />
                                <p>{item}</p>
                            </div>
                            <img src="/icons/trash-solid-full.svg"
                                alt="Delete icon"
                                title='Delete Task'
                                onClick={() => handleTaskDel(index)}
                            />
                        </div>
                    ))}
                </div>

                <section className='completedSection'>
                    <h3>COMPLETED TASKS</h3>

                    <div className='completedContainer'>
                        {completed.map((item, index) => (
                            <div className='completedTask' key={index}>
                                <div className='taskName'>
                                    <input type="radio" checked readOnly />
                                    <p>{item}</p>
                                </div>
                                <img src="/icons/trash-solid-full.svg"
                                    alt="Delete icon"
                                    title='Delete Task'
                                    onClick={() => handleCompletedDel(index)}
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