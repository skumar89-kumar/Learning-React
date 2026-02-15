import Project from "./Project";
import { type SyntheticEvent,useState } from "react";

interface ProjectFormProps{
onCancel:()=>void;
onSave:(project:Project)=>void;
project:Project;
}

function ProjectForm({onCancel,onSave,project:initialProject}:ProjectFormProps){

    const[project,setProject]=useState(initialProject);

    const handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault();
        onSave(project);
    }

    const handlechange=(e:any)=>{
        const{type,name,value,checked}=e.target;
        let updatedvalue=(type==='checkbox')?checked:value;
        if(type==='number'){
            updatedvalue=Number(updatedvalue);
        }
        const change={
            [name]:updatedvalue
        };
        let updatedProject:Project;

        setProject((p)=>{
            updatedProject= new Project({...p,...change})
            return updatedProject;
        })

    }
    return(
        <>
        <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Project Name" onChange={handlechange}
         value={project.name}></input>
        <label htmlFor="description">Project description</label>
        <textarea  id="description" name="description" placeholder="Enter project description" 
        onChange={handlechange}
        value={project.description}></textarea>
       <label htmlFor="budget">Project budget</label>
        <input type="number" id="budget" name="budget" placeholder="Enter Project budget" 
        onChange={handlechange}
        value={project.budget}></input>
        <label htmlFor="isActive">Project isActive</label>
        <input type="checkbox" id="isActive" name="isActive" placeholder="Project isActive"
        onChange={handlechange}
        checked={project.isActive}></input>
        <div className="input-group">
        <button type="button" className="primary bordered medium" >Save project</button>
        <span> </span>
          <button type="button" className="bordered medium" onClick={onCancel} >Cancel</button>        
        </div>       
        </form>

        </>
    );
}

export default ProjectForm;