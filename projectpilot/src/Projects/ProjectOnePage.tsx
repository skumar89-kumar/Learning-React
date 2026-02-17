import Project from "./Project";
import { ProjectAPI } from "./Services/projectAPI";
import ProjectDetails from "./ProjectDetails";
import { useState,useEffect } from "react";
import { useParams } from "react-router";

function ProjectOnePage(){
const[project,setProject]=useState<Project|null>(null);
const[loading,setLoading]=useState<boolean>(false);
const[error,setError]=useState<String | null>(null);

const param=useParams();
const id=Number(param.id);

useEffect(()=>{
    setLoading(true);
    ProjectAPI.find(id)
    .then((data)=>setProject(data))
    .catch((error)=>setError(error))
    .finally(()=>setLoading(false));
},[id])

    return(
        <>
        <div>
            <h1>Project Details</h1>
            {
                loading && (
                    <div className="center-page">
                        <span className="spinner primary"></span>
                        <p>Loading ...</p>
                    </div>
                )
            }
            <div className="row">
            {
                error && (
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                )
            }
            </div>
            {
                project && (
                    <ProjectDetails project={project}></ProjectDetails>
                )
            }
        </div>
        </>
    );
}
export default ProjectOnePage;