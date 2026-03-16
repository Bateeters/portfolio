import { projects } from "../data/projects.js";

const contentEl = document.getElementById("project-content");
const navButtons = document.querySelectorAll(".project-nav .nav-link");

function renderProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const linkButtons = Object.entries(project.links).map(([text, href]) => {
        return `
            <a href="${href}" class="btn btn-primary mt-xl-3 mb-3 px-4 me-4" target="_blank">${text}</a>
        `
    }).join("");

    contentEl.innerHTML = `
    <div class="col-xl-5 col-lg-12">
        <img class="w-100 h-100 project-image" src="${project.image}" alt="${project.title}">
    </div>
    <div class="col-xl-7 col-lg-12 d-flex flex-column">
        <div class="row h-100">
            <div class="col-xl-7 col-md-8 col-12 mt-xl-0 mt-3">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="col-xl-5 col-md-3 col-12 p-3">
                <div class="row justify-content-between h-100">
                    <div class="col-md-12 col-5">
                        <ul class="project-bullets">
                            ${project.tech.map(t => `<li class="pb-1">${t}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex flex-wrap mt-xl-auto col-12">
        ${linkButtons}
    </div>
    `;
}

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        renderProject(btn.dataset.project);
    });
});

renderProject("1");