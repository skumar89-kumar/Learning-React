import Project from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
interface ProjectlistProps{
  projects:Project[];
}

function ProjectList({projects}:ProjectlistProps){
    return(
        <>
        {/* <pre>
            {JSON.stringify(projects,null,2)}
        </pre> */}
        {/* <ul className="row">
{projects.map((project)=>(
    <li key={project.id} className="col-md-4 mb-3">
        {project.name}
    </li>
))}
        </ul> */}

        <div className="row">
            {projects.map((project)=>(
                <div key={project.id} className="cols-sm">
                    {/* <div className="card">
                    <img src={project.imageurl} className="card-img-top" alt={project.name}>
                    </img>                  
                    <section className="section dark"> 
                    <h5 className="strong">
                    <strong>{project.name}</strong>
                    </h5>
                    <p>{project.description}</p>
                    <p>{project.budget.toLocaleString()}</p>
                    </section>
                    </div> */}
                 <ProjectCard Project={project}></ProjectCard>
                 <ProjectForm />
                </div>
            ))}
        </div>
        </>
    )
}

export default ProjectList;