import { Link } from "react-router";
import Project from "./Project";

function formatDescription( description:string):string{
    return  description.substring(0,60) +"...";
}

interface ProjectCardProps{
    Project:Project;
    onEdit:(project:Project)=>void;
}

function ProjectCard({Project,onEdit}:ProjectCardProps){

const handleEditClick=(projectbeingEdited:Project)=>{
    console.log("Editing Project :",projectbeingEdited);
    onEdit(projectbeingEdited);
}
    return (

        <>
        
        <div className="card">
  <img src={Project.imageurl} className="card-img-top" alt={Project.name}>
                    </img>
                  
                    <section className="section dark"> 
                   <Link to={`/projects/${Project.id}`}>
                    <h5 className="strong">
                    <strong>{Project.name}</strong>
                    </h5>
                    <p>{formatDescription(Project.description)}</p>
                    <p>{Project.budget.toLocaleString()}</p>
                   </Link>
                    <button className="btn bordered" onClick={()=>handleEditClick(Project)}>
                        <span className="icon-edit"> </span>
                        Edit Project
                    </button>
                    </section>
        </div>
        </>
    )
}


export default ProjectCard;