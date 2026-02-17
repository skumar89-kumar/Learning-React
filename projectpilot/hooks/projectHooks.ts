import { useState,useEffect } from "react";
import { ProjectAPI } from "../src/Projects/Services/projectAPI";
import Project from "../src/Projects/Project";

function useProject(){
    const[projects,setProject]=useState<Project[]>([]);
    const[loading,setLoading]=useState<boolean>(false);
    const[error,setError]=useState<string| undefined>(undefined);
    const[currentPage,setCurrentPage]=useState<number>(1);
    const[saving,setSaving]=useState<boolean>(false);
    const[savingError,setSavingError]=useState<string|undefined>(undefined);

    useEffect(()=>{
        async function loadProjects(){
            setLoading(true);
            try{
                const data=await ProjectAPI.get(currentPage);
                if(currentPage===1){
                    setProject(data);
                }else{
                    setProject((project)=>[...project,...data]);
                }
            }
            catch(err){
                if(err instanceof Error){
                    setError(err.message);
                }
            }
            finally{
                setLoading(false);
            }
        }
        loadProjects();
    },[currentPage]);

    const saveProject=(project:Project)=>{
        setSaving(true);
        ProjectAPI.put(project)
        .then((updateProject: Project)=>{
            const updateProjects=projects.map((p)=>{
                return p.id===project.id?new Project(updateProject):p;
            });
            setProject(updateProjects);
        })
        .catch((err:any)=>setSavingError(err.message))
        .finally(()=>setSaving(false));
    };
    return {
        projects,
        loading,
        error,
        currentPage,
        setCurrentPage,
        saving,
        savingError,
        saveProject
    }
}

export {useProject};