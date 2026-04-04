

import EntireTask from './EntireTask'
import { useContext } from 'react'
import {ProjectContext} from '../context/ProjectContext'
import { useNavigate } from 'react-router-dom'

const AllProjects = function() {

    const { projects, setProjects, handleDel, cancelAll } = 
    useContext(ProjectContext)

    const navigate = useNavigate();

    const goBack = function(){
        navigate(-1)
    }

  return (
    <main className = "allProjects">

        <div className = 'headers'>

            <span>
                <img src="icons/left_arrow_icon.png" 
                alt="Left Arrow Icon" 
                onClick = {goBack}
                />
            </span>
      <h2>All Projects</h2>
      <button onClick = {cancelAll}>Clear All</button>
      </div>

      <div className = 'mainContainerMM'>
      {projects.map((proj, index) => (
        <EntireTask
          key={index}
          name={proj.name}
          category={proj.category}
          index={index}
          id = {proj.id}
          handleDel={handleDel}
        />
      ))}
      </div>
    </main>
  )
}

export default AllProjects