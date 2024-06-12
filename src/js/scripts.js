// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { id: 1, name: 'Project 1', description: 'Description for project 1' },
        { id: 2, name: 'Project 2', description: 'Description for project 2' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });
});
