import { projects } from "../data/projects.js";

const contentEl = document.getElementById("project-content");
const navButtons = document.querySelectorAll(".project-nav .nav-link");

function renderProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const linkButtons = Object.entries(project.links).map(([text, href]) => {
        return `
            <a href="${href}" class="btn btn-primary" target="_blank">${text}</a>
        `
    }).join("");

    contentEl.innerHTML = `
    <div class="col-5">
        <img class="w-100 h-100 project-image" src="${project.image}" alt="${project.title}">
    </div>
    <div class="col-7 d-flex flex-column">
        <div class="row">
            <div class="col-7 d-flex flex-column justify-content-between">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="col-5">
                <div class="row justify-content-between h-100">
                    <div>
                        <ul>
                            ${project.tech.map(t => `<li>${t}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="d-flex flex-column mt-auto">
                        ${linkButtons}
                    </div>
                </div>
            </div>
        </div>
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