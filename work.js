//Functionality for Projects.html

let currentProject = 0; // create a variable for the index of the projects array */

const projects = document.querySelectorAll('.project'); // link to the project elements in the html file

//function to display the current project
function showProject(index) {
    projects[currentProject].style.display = 'none';
    projects[index].style.display = 'block';
    currentProject = index;
}

//function to display the next project when the 'Next' button is clicked
document.getElementById('nextBtn').addEventListener('click', function () {
    let nextProject = currentProject + 1;
    if (nextProject >= projects.length) {
        nextProject = 0;
    }
    showProject(nextProject);
});

//function to display the previous project when the 'Previous' button is clicked
document.getElementById('prevBtn').addEventListener('click', function () {
    let prevProject = currentProject - 1;
    if (prevProject < 0) {
        prevProject = projects.length - 1;
    }
    showProject(prevProject);
});

showProject(0); // Show the first project when the page is opened