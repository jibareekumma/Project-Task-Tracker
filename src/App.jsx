

import { Routes, Route } from "react-router-dom"
import TaskAdd from "./components/TaskAdd"
import { useState } from "react"
import AllProjects from "./components/AllProjects"




function App() {

  const [projects, setProjects] = useState(() => {
  const saved = localStorage.getItem('projects')
  return saved ? JSON.parse(saved) : []
})
  
  return (
    <>
    
       <Routes>

      <Route path="/" element={<TaskAdd 
      projects = {projects} setProjects = {setProjects}
      />} />
      <Route path="/all-projects" element={<AllProjects
      />} />
     
    
    </Routes>


    </>
  )
}

export default App
