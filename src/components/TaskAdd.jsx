import '../css/TaskAdd.css'
import { useState, useEffect} from 'react';
import '../css/Modal.css'
import CloseIcon from '../icons/xmark-solid.png'
import SingleTask from './SingleTask';
import Header from './Header';
import EntireTask from './EntireTask';
import RecentHeader from './RecentHeader';
import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

const TaskAdd = function () {
    const [showModal, setShowModal] = useState(false);
    const { projects, setProjects, handleDel, cancelAll, handleCreate }
    = useContext(ProjectContext)
    const [project, setProject] = useState('') 
    const [category, setCategory] = useState('')

    const [showToast, setShowToast] = useState(false)
    const [toastLoader, setToastLoader] = useState(0)

    const handleSubmit = function(){ 
    handleCreate(project, category)
    setProject('')
    setCategory('')
    setShowModal(false)
    setShowToast(true)
    setToastLoader((prev) => prev + 1)

    setTimeout(function(){
        setShowToast(false)  
    }, 2000)

}


    const modalDisplay = function () {
        setShowModal(true);
    };

    const closeModal = function () {
        setShowModal(false);
    };

//     const handleCreate = function(project, category) {
//     const newProject = {
//         id: Date.now(),
//         name: project,
//         category: category,
//         tasks: []
        
//     }
//     setProjects((prev) => [...prev, newProject])
// }


    return <>

    <Header cancelAll = {cancelAll} />


        <div className="first-page-task-container">

            {projects.slice(0, 5).map( (proj, index) => (
                     <SingleTask 
                     key = {index}
                     name = {proj.name}
                     category = {proj.category}
                     index = {index}
                     id = {proj.id}
                     handleDel = {handleDel}
                     />
                )
            )}
            
            <div className="addTask" onClick={modalDisplay}>  + </div>
        </div>

        <RecentHeader />
        

            {
                projects.slice(0, 3).map( (proj, index) => (
                    <EntireTask 
                    key = {index}
                     name = {proj.name}
                     category = {proj.category}
                     index = {index}
                     id = {proj.id}
                     handleDel = {handleDel}
                    />
                )
            ) }
        

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
                        onClick = {handleSubmit}
                >Create</button>
            </form>
        </div>

        <div
            className="backdrop"
            style={{ display: showModal ? 'flex' : 'none' }}
            onClick={closeModal}
        >
        </div>

        <div className="toast" style=
        {{ display: showToast ? 'flex' : 'none' }}>
        <p>Your project has been added Successfully!!! </p>
        <div className = 'toastLoader' key = {toastLoader}></div>
        </div>

        <div className = 'toastBackdrop'
        style = {{ display: showToast ? 'flex' : 'none'}}
        onClick = { () => setShowToast(false)}
        >
        </div>
    </>
}

export default TaskAdd
