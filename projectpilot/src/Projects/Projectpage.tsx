import MOCK_Project from "./MockProject";
import type Project from "./Project";
import ProjectList from "./ProjectList";
function Projectpage(){

    const handleSave=(project:Project)=>{
        console.log("Saving Project:", project);
    }
    return (
        <>
        <h1>Projects</h1>
        <hr></hr>
        {/* <pre>
            {JSON.stringify(MOCK_Project,null,2)}
        </pre> */}
       <ProjectList projects={MOCK_Project} onSave={handleSave}></ProjectList>
        
        </>
    );
}

export default Projectpage;