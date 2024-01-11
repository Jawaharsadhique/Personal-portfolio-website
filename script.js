document.addEventListener('DOMContentLoaded', function () {
    const projectList = document.getElementById('project-list');
  
    // Sample projects data
    const projects = [
      { name: 'Project 1', description: 'Description of Project 1' },
      { name: 'Project 2', description: 'Description of Project 2' },
      // Add more projects as needed
    ];
  
    // Populate project section dynamically
    projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.innerHTML = <><h3>${project.name}</h3><p>${project.description}</p></>;
      projectList.appendChild(projectItem);
    });
  });