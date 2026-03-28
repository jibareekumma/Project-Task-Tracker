

import { createContext, useState, useEffect } from "react"


export const ProjectContext = createContext()

export const ProjectProvider = function( {children} ){


    const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  const handleDel = function(index) {
    setProjects((prev) => prev.filter((n, i) => i !== index))
  }

  const cancelAll = function(){

        setProjects([])
        
    }

const handleCreate = function(project, category) {
    const newProject = {
        name: project,
        category: category
    }
    setProjects((prev) => [...prev, newProject])
}

    return (
        <>
        <ProjectContext.Provider value={{ projects, 
            setProjects, handleDel, cancelAll }}>
      {children}
    </ProjectContext.Provider>
        </>
    )
}

