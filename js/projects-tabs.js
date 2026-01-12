import { projects } from "../data/projects.js";

const contentEl = document.getElementById("project-content");
const navButtons = document.querySelectorAll(".project-nav .nav-link");

function renderProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const linkButtons = Object.entries(project.links).map(([text, href]) => {
        return `
            <a href="${href}" class="btn btn-primary mt-xl-3 mb-3" target="_blank">${text}</a>
        `
    }).join("");

    contentEl.innerHTML = `
    <div class="col-xl-5 col-lg-12">
        <img class="w-100 h-100 project-image" src="${project.image}" alt="${project.title}">
    </div>
    <div class="col-xl-7 col-lg-12 d-flex flex-column">
        <div class="row h-100">
            <div class="col-xl-7 col-12 mt-xl-0 mt-3">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="col-xl-5 col-12">
                <div class="row justify-content-between h-100">
                    <div class="col-xl-12 col-5">
                        <ul>
                            ${project.tech.map(t => `<li class="pb-1">${t}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="d-flex flex-column mt-xl-auto col-xl-12 col-7">
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