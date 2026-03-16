import '../css/Modal.css'

const Modal = function (){

    return <div className = "modalWindow">
        <div className = "headerContainer">
        <h3>Input Project Details</h3>
        <img src="src/icons/xmark-solid.png" 
        width = {30}
        alt="Close Modal" />
        </div>
        <form>
            <input type="text" 
            id = "project-name"
            placeholder = "Input Project Name"/>
            <select name="category" id="project-category"
            placeholder = "Select category"
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
            <button>Create</button>
        </form>
    </div>

}

export default Modal