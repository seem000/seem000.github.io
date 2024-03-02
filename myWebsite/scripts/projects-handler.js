var projectsDiv = document.getElementById('projects');
for (let i=0;i<PROJECTS.length;i++){
    var currentObject =PROJECTS[i];
    var projectDiv=document.createElement('div');
    var divStyle = document.createAttribute('style'); 
    divStyle.value= 'width: 300px; display:inline-block; margin:10px';
    projectDiv.setAttributeNode(divStyle);
    
    //h3
    var title=document.createElement('h3');
    var titleNode = document.createTextNode(currentObject.title);
    title.appendChild(titleNode);

    //img
    var image=document.createElement('img');
    var source = document.createAttribute('src'); 
    source.value = currentObject.img;
    image.setAttributeNode(source);
    var imgStyle = document.createAttribute('style'); 
    imgStyle.value= 'width: 300px; height: 180px;';
    image.setAttributeNode(imgStyle);

    //p
    var p=document.createElement('p');
    var pNode = document.createTextNode(currentObject.description);
    p.appendChild(pNode);

    projectDiv.appendChild(title);
    projectDiv.appendChild(image); 
    projectDiv.appendChild(p);

    projectsDiv.appendChild(projectDiv);




    

    
    
}
