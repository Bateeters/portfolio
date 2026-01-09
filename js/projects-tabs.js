import { projects } from "../data/projects.js";

const contentEl = document.getElementById("project-content");
const navButtons = document.querySelectorAll(".project-nav .nav-link");

function renderProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    contentEl.innerHTML = `
    <div class="col-5">
        <h3 style="background-color: blue;">${project.title}</h3>
        <img class="w-100" src="${project.image}" alt="${project.title}" style="background-color: green;">
    </div>
    <div class="col-5">
        <p style="background-color: pink;">${project.description}</p>
        <div style="background-color: purple;">
            <a href="${project.links.live}" target="_blank">Live</a>
            <a href="${project.links.repo}" target="_blank">GitHub</a>
        </div>
    </div>
    <div class="col-2">
        <ul style="background-color: orange;">
            ${project.tech.map(t => `<li>${t}</li>`).join("")}
        </ul>
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