import Project from "../Project";

const baseUrl='http://localhost:9090/projects';

function translateStatustoErrorMessage(Status:number):string{
    switch(Status){
        case 401: return 'Please Login Again'
        case 403: return 'you do not have the permission to view the project(s).'
        default: return 'Their was as error retrieving the project(s). Please try again.'
    }
    
}

function checkStatus(response:any){
    if(response.ok){
        return
    }
    else {
        const httpErrorInfo={
            status: response.status,
            statusText:response.statusText,
            url:response.url
        };
        console.log(JSON.stringify(httpErrorInfo));
        
        const errorMessage=translateStatustoErrorMessage(httpErrorInfo.status);
        throw new Error(errorMessage);
    }

}

function parseJSON(response:Response){
    return response.json;
}

function delay(ms:number){
    return function(x:any):Promise<any>{
        return new Promise((resolved)=>setTimeout(()=>resolved(x),ms))
    };
}

function converttoProjectModel(item:any):Project{
    return new Project(item);
}

function convertToProjectModels(data:any[]):Project[]{
    const projects:Project[]=data.map(converttoProjectModel);
    return projects
}

const ProjectAPI={
    get(page=1,limit=20){
        return fetch(`${baseUrl}?_page=${page}&_per_page=${limit}`)
        //.then(delay(1000))
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToProjectModels)
        .catch((error:TypeError)=>{
            console.log(`log client error:${error}`)
            throw new Error (`There was an error retrieving the projects. Please try again`);
        })

    },
     put(project:Project){
        return fetch(`${baseUrl}/${project.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project)
        })
        //.then(delay(1000))
        .then(checkStatus)
        .then(parseJSON)       
        .catch((error:TypeError)=>{
            console.log(`log client error:${error}`)
            throw new Error (`There was an error updating the project. Please try again`);
        })

    }
};

export {ProjectAPI}