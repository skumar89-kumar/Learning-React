import MOCK_Project from "./MockProject";
import ProjectList from "./ProjectList";
function Projectpage(){

    return (
        <>
        <h1>Projects</h1>
        <hr></hr>
        {/* <pre>
            {JSON.stringify(MOCK_Project,null,2)}
        </pre> */}
       <ProjectList projects={MOCK_Project}></ProjectList>
        
        </>
    );
}

export default Projectpage;