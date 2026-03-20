import '../css/TaskAdd.css'
import { useState } from 'react';
import '../css/Modal.css'
import CloseIcon from '../icons/xmark-solid.png'
import SingleTask from './SingleTask';

const TaskAdd = function () {
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState('')
    const [projects, setProjects] = useState([])
    const [category, setCategory] = useState('')

    const handleCreate = function(){
        
        const newProject = {
            name: project,
            category: category
        }

        setProjects( (prev) => [...prev, newProject])

        setProject('')
        setCategory('')
        setShowModal(false)
    }

    const cancelAll = function(){

        setProject('')
        setCategory('')
        setShowModal(false)
    }

    const modalDisplay = function () {
        setShowModal(true);
    };

    const closeModal = function () {
        setShowModal(false);
    };

    return <>
        <div className="taskContainer">

            {projects.map( (proj, index) => (
                     <SingleTask 
                     key = {index}
                     name = {proj.name}
                     category = {proj.category}
                     />
                )
            )}
            
            <div className="addTask" onClick={modalDisplay}>  + </div>
        </div>

        <div className="modalWindow" style={{ display: showModal ? 'flex' : 'none' }}>
            <div className="headerContainer">
                <h3>Input Project Details</h3>
                <img
                    src={CloseIcon}
                    width={30}
                    alt="Close Modal"
                    className='btnClose'
                    onClick={closeModal}
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    id="project-name"
                    placeholder="Input Project Name"
                    value = {project}
                    onChange = {
                        (e) => setProject(e.target.value)
                    }
                />
                <select
                    name="category"
                    id="project-category"
                    placeholder="Select category"
                    value = {category}
                    onChange = {
                        (e) => setCategory(e.target.value)
                    }
                >
                    <option value="">Select Category</option>
                    <option value="Work">Work</option>
                    <option value="Health">Health</option>
                    <option value="Personal">Personal</option>
                    <option value="Learning">Learning</option>
                    <option value="Finance">Finance</option>
                    <option value="Creative">Creative</option>
                    <option value="Home">Home</option>
                    <option value="Event">Creative</option>
                    <option value="Development">Development</option>
                    <option value="Research">Research</option>
                    <option value="Other">Other</option>
                </select>
                <button type='button'
                        onClick = {handleCreate}
                >Create</button>
            </form>
        </div>

        <div
            className="backdrop"
            style={{ display: showModal ? 'flex' : 'none' }}
            onClick={closeModal}
        >
        </div>
    </>
}

export default TaskAdd
