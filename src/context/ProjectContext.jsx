

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

const handleSubmit = function(e){
    console.log('It worked')
    e.preventDefault()
}

const handleCreate = function(project, category) {
    const newProject = {
        id: Date.now(),
        name: project,
        category: category,
        task: []
    }
    setProjects((prev) => [...prev, newProject])
}

const editProjectName = function(id, newName) {
    setProjects((prev) => prev.map((proj) => {
        if (proj.id === id) {
            return {
                ...proj,        
                name: newName   
            }
        }
        return proj
    }))
}

const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved === 'true'  
})

const toggleDark = function() {
    setIsDark((prev) => {
        localStorage.setItem('darkMode', !prev)
        return !prev
    })
}

    useEffect(() => {
    if (isDark) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}, [isDark])


    return (
        <>
        <ProjectContext.Provider value={{ projects, setProjects, handleDel, 
        cancelAll, handleCreate, editProjectName, isDark, toggleDark
}} >
      {children}
      
    </ProjectContext.Provider>
        </>
    )
}


