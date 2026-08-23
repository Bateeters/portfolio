import { projects } from "../data/projects.js";

const projectsListEl = document.getElementById("projects-list");
const modalEl = document.getElementById("projectModal");

const modalTitleEl = document.getElementById("project-modal-title");
const modalLearnedContainer = document.getElementById("project-learned-container");
const modalLearnedEl = document.getElementById("project-modal-learned");
const modalFeaturedEl = document.getElementById("project-modal-featured");
const modalImageEl = document.getElementById("project-modal-image");
const modalChallengeEl = document.getElementById("project-modal-challenge");
const modalSolutionEl = document.getElementById("project-modal-solution");
const modalImpactEl = document.getElementById("project-modal-impact");
const modalOverviewEl = document.getElementById("project-modal-overview");
const modalHighlightsEl = document.getElementById("project-modal-highlights");
const modalTechEl = document.getElementById("project-modal-tech");
const modalLinksEl = document.getElementById("project-modal-links");

const projectModal = modalEl ? new bootstrap.Modal(modalEl) : null;

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getProjectLinks(project) {
    return Object.entries(project.links || {}).map(([label, href]) => ({
        label,
        href,
        isGithub: /github/i.test(label) || /github\.com/i.test(href),
        isDemo: /live|demo/i.test(label),
    }));
}

function getProjectSummary(project) {
    if (project.overview) {
        return project.overview;
    }

    if (project.longDescription) {
        return project.longDescription;
    }

    if (Array.isArray(project.highlights) && project.highlights.length > 0) {
        return `${project.description} ${project.highlights.join(". ")}.`;
    }

    return project.description;
}

function renderProjectCards() {
    if (!projectsListEl) {
        return;
    }

    projectsListEl.innerHTML = projects.map((project) => {
        const links = getProjectLinks(project);
        const quickLinks = links
            .filter((link) => link.isGithub || link.isDemo)
            .slice(0, 2)
            .map((link) => `
                <a
                    href="${escapeHtml(link.href)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-card-icon-link"
                    aria-label="Open ${escapeHtml(project.title)} ${escapeHtml(link.label)}"
                >
                    ${link.isGithub ? "GitHub" : "Live"}
                </a>
            `)
            .join("");

        const tech = (project.tech || [])
            .slice(0, 4)
            .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
            .join("");

        const extraCount = Math.max((project.tech || []).length - 4, 0);
        const featured = project.featured
            ? `<span class="project-card-eyebrow">Featured Project</span>`
            : `<span class="project-card-eyebrow">${project.eyebrow}</span>`;

        return `
            <article class="project-card" data-project-id="${escapeHtml(project.id)}">
                <div class="project-card-body">
                    <div class="project-card-content">
                        <div class="project-card-header">
                            <div>
                                ${featured}
                                <h3 class="project-card-title" data-project-trigger="${escapeHtml(project.id)}">${escapeHtml(project.title)}</h3>
                            </div>
                            <div class="project-card-actions">
                                ${quickLinks}
                            </div>
                        </div>
                        <p class="project-card-description">${escapeHtml(project.description)}</p>
                        <div class="project-tags">
                            ${tech}
                            ${extraCount ? `<span class="project-tag project-tag--outline">+${extraCount} more</span>` : ""}
                        </div>
                    </div>
                    <div class="project-card-cta-wrap">
                        <button type="button" class="project-card-cta btn btn-link p-0" data-project-trigger="${escapeHtml(project.id)}">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="project-card-accent"></div>
            </article>
        `;
    }).join("");
}

function populateModal(projectId) {
    const project = projects.find((entry) => entry.id === projectId);
    if (!project) {
        return;
    }

    const links = getProjectLinks(project);

    modalTitleEl.textContent = project.title;
    modalOverviewEl.textContent = getProjectSummary(project);
    modalChallengeEl.textContent = project.challenge || "Project challenge details available on request.";
    modalSolutionEl.textContent = project.solution || "Project solution details available on request.";
    modalImpactEl.textContent = project.impact || "Project impact details available on request.";

    if (project.featured) {
        modalFeaturedEl.classList.remove("d-none");
    } else {
        modalFeaturedEl.classList.add("d-none");
    }

    if (project.image) {
        modalImageEl.src = project.image;
        modalImageEl.alt = project.title;
        modalImageEl.classList.remove("d-none");
    } else {
        modalImageEl.removeAttribute("src");
        modalImageEl.alt = "";
        modalImageEl.classList.add("d-none");
    }

    modalImpactEl.innerHTML = project.impact
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    
    if (project.learned) {
        modalLearnedContainer.classList.remove("d-none");
        modalLearnedEl.innerHTML = project.learned
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("");
    } else {
        modalLearnedContainer.classList.add("d-none");
    }

    modalHighlightsEl.innerHTML = project.highlights
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");

    modalTechEl.innerHTML = project.tech
        .map((item) => `<span class=\"project-tag\">${escapeHtml(item)}</span>`)
        .join("");

    modalLinksEl.innerHTML = links.length
        ? links.map((link) => `
            <a
                href="${escapeHtml(link.href)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary project-modal-link"
            >
                ${escapeHtml(link.label)}
            </a>
        `).join("")
        : ``;
}

function bindProjectInteractions() {
    if (!projectsListEl) {
        return;
    }

    const projectCards = Array.from(projectsListEl.querySelectorAll(".project-card"));

    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            projectCards.forEach((entry) => {
                entry.classList.toggle("is-muted", entry !== card);
            });
        });

        card.addEventListener("mouseleave", () => {
            projectCards.forEach((entry) => entry.classList.remove("is-muted"));
        });
    });

    projectsListEl.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-project-trigger]");
        if (!trigger) {
            return;
        }

        const { projectTrigger } = trigger.dataset;
        populateModal(projectTrigger);
        projectModal?.show();
    });
}

renderProjectCards();
bindProjectInteractions();
