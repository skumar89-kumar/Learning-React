import MOCK_Project from "./MockProject";
import Project from "./Project";
import ProjectList from "./ProjectList";
import { useState } from "react";

function Projectpage(){
    const[projects,setProject]=useState<Project[]>(MOCK_Project);

    const handleSave=(project:Project)=>{
        console.log("Saving Project:", project);
        const updatedProjects=projects.map((p:Project)=>{
            return p.id===project.id?project:p;
        });
        setProject(updatedProjects);
    }
    return (
        <>
        <h1>Projects</h1>
        <hr></hr>
        {/* <pre>
            {JSON.stringify(MOCK_Project,null,2)}
        </pre> */}
       {/* <ProjectList projects={MOCK_Project} onSave={handleSave}></ProjectList> */}
         <ProjectList projects={projects} onSave={handleSave}></ProjectList>
        </>
    );
}

export default Projectpage;