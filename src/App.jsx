

import { Routes, Route } from "react-router-dom"
import TaskAdd from "./components/TaskAdd"
import { useState } from "react"
import AllProjects from "./components/AllProjects"
import ProjectDetail from './components/ProjectDetail'



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
     <Route path = "/project/:id" element = {<ProjectDetail/>}>
      </Route>
    
    </Routes>


    </>
  )
}

export default App
