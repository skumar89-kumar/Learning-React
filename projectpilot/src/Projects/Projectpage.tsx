//import MOCK_Project from "./MockProject";
import Project from "./Project";
import ProjectList from "./ProjectList";
import { useState,useEffect } from "react";
import { ProjectAPI } from "./Services/projectAPI";


function Projectpage(){
    //const[projects,setProject]=useState<Project[]>(MOCK_Project);
    const[projects,setProject]=useState<Project[]>([]);
    const[loading,setLoading]=useState<boolean>(false);
    const[error,setError]=useState<string| undefined>(undefined);
    const[currentPage,setCurrentPage]=useState<number>(1);

    useEffect(()=>{
        async function loadProject(){
            setLoading(true);
            try {
                //const data=await ProjectAPI.get(1,9);
                const data=await ProjectAPI.get(currentPage,9);
                setError('');
                 //setProject(data);
                if(currentPage===1){
                     setProject(data);
                }
                else{
                    setProject((projects)=>[...projects,...data])
                }
               
            } catch (error) {
                if(error instanceof Error){
                    setError(error.message);
                } 
            }
            finally{
                setLoading(false);
            }
        };
        loadProject();
   // },[]);
     },[currentPage]);

     const handleMoreClick=()=>{
        setCurrentPage((currentPage)=>currentPage+1);
     };

    const handleSave=(project:Project)=>{
        console.log("Saving Project:", project);
        // const updatedProjects=projects.map((p:Project)=>{
        //     return p.id===project.id?project:p;
        // });
        // setProject(updatedProjects);

        ProjectAPI.put(project)
        .then((updateProject)=>{
            const updatedProjects=projects.map((p:Project)=>{
            return p.id===project.id?new Project(updateProject):p;
        });
        setProject(updatedProjects);
        })
        .catch((error)=>{
            if(error instanceof Error){
                setError(error.message);
            }
        });
    }
    return (
        <>
        <h1>Projects</h1>
        <hr></hr>

        {
            error && (
                <div className="row">
                    <div className="card large error">
                    <section>
                        <p>
                            <span className="icon-alert inverse">
                                {error}
                            </span>
                        </p>
                    </section>
                    </div>
                </div>
            )
        }
        {/* <pre>
            {JSON.stringify(MOCK_Project,null,2)}
        </pre> */}
       {/* <ProjectList projects={MOCK_Project} onSave={handleSave}></ProjectList> */}
         <ProjectList projects={projects} onSave={handleSave}></ProjectList>
            {
                !loading && !error && (
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="button-group fluid">
                        <button className="button default" onClick={handleMoreClick}>
                            More projects...
                        </button>
                        </div>
                        </div>
                    </div>
                )
            }
         
         {
            loading && (
                <div className="centre-page">
                    <span className="spinner-primary"> </span>
                    <p>Loading... </p>
                </div>
            )
         }
        </>
    );
}

export default Projectpage;