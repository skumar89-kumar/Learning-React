function ProjectForm(){

    return(
        <>
        <form className="input-group vertical">
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Project Name"></input>
        <label htmlFor="description">Project description</label>
        <textarea  id="description" name="description" placeholder="Enter project description"></textarea>
       <label htmlFor="budget">Project budget</label>
        <input type="number" id="budget" name="budget" placeholder="Enter Project budget"></input>
        <label htmlFor="isActive">Project isActive</label>
        <input type="checked" id="isActive" name="isActive" placeholder="Project isActive"></input>
        <div className="input-group">
        <button type="button" className="primary bordered medium" >Save project</button>
        <span> </span>
          <button type="button" className="bordered medium" >Cancel</button>        
        </div>       
        </form>

        </>
    );
}

export default ProjectForm;