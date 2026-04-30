

import '../css/EntireTask.css'
import { useNavigate } from 'react-router-dom'
import CircularProgress from './CircularProgress'
import { ProjectContext } from '../context/ProjectContext'
import { useContext } from 'react'


const EntireTask = function({ name, category, handleDel, index, id }) {

    const navigate = useNavigate()

    
    const { projects } = useContext(ProjectContext)
    const project = projects.find((proj) => String(proj.id) === String(id))
    const tasks = project?.task ?? []
    const completed = project?.completed ?? []

    const totalCount = tasks.length + completed.length
    const percentageCount = totalCount === 0 ? 0 : Math.round((completed.length / totalCount) * 100)

    return <>
        <div className='taskContainerM'>
            <div className='heading'>
                <div className='iconContainer'>
                    <span>
                        <img src='icons/progress-icon.png' alt="Tracking Icon" />
                    </span>
                    <h6>Track Your Progress</h6>
                </div>
                <CircularProgress percentage={percentageCount} />
            </div>

            <div className='details'>
                <div className='texts'>
                    <h5>{name}</h5>
                    <p>{category}</p>
                </div>
                <div className='icons'>
                    <img
                        className='trash-icon'
                        src="icons/red trash icon.png"
                        alt="Delete"
                        title='Delete Project'
                        onClick={() => handleDel(id)}
                    />
                    <img
                        className='navigate-icon'
                        src="icons/open page icon.png"
                        alt="Open Page Icon"
                        title='Open project'
                        onClick={() => navigate(`/project/${id}`)}
                    />
            </div>
        </div>
        </div>
    </>
}

export default EntireTask