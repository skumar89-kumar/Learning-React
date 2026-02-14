import MOCK_Project from "./MockProject";

function Projectpage(){

    return (
        <>
        <h1>Projects</h1>
        <hr></hr>
        <pre>
            {JSON.stringify(MOCK_Project,null,2)}
        </pre>
        </>
    );
}

export default Projectpage;