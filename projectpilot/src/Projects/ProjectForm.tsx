import Project from "./Project";
import { type SyntheticEvent,useState } from "react";

interface ProjectFormProps{
onCancel:()=>void;
onSave:(project:Project)=>void;
project:Project;
}

function ProjectForm({onCancel,onSave,project:initialProject}:ProjectFormProps){

    const[project,setProject]=useState(initialProject);

    const[errors,setErrors]=useState({name:'',description:'',budget:''});

    function validate(project:Project){
        const errors:any={name:'',description:'',budget:''};

        if(project.name.length===0){
            errors.name='Name is required';
        }
        if(project.name.length>0 && project.name.length<3){
            errors.name='Name need to be at least 3 characters';
        }
        if(project.description.length===0){
            errors.description='Description is required';
        }
        if(project.budget===0){
            errors.budget='Budget must be more then 0';
        }
        return errors;
    }

    function isValid(){
        return(
            errors.name.length===0 &&
            errors.description.length===0 &&
            errors.budget.length===0
        );
    }

    const handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault();
        if(!isValid){
            return;
        }
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

        setErrors(()=>{
          return  validate(updatedProject)
        });
    }
    return(
        <>
        <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Project Name" onChange={handlechange}
         value={project.name}></input>
         {
            errors.name.length>0 &&(
                <div className="card errors">
                    <p>{errors.name}</p>
                </div>
            )
         }
        <label htmlFor="description">Project description</label>
        <textarea  id="description" name="description" placeholder="Enter project description" 
        onChange={handlechange}
        value={project.description}></textarea>
         {
            errors.description.length>0 &&(
                <div className="card errors">
                    <p>{errors.description}</p>
                </div>
            )
         }
       <label htmlFor="budget">Project budget</label>
        <input type="number" id="budget" name="budget" placeholder="Enter Project budget" 
        onChange={handlechange}
        value={project.budget}></input>
         {
            errors.budget.length>0 &&(
                <div className="card errors">
                    <p>{errors.budget}</p>
                </div>
            )
         }
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