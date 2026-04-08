import { experiences, resumeCta } from "../data/experience.js";

const experienceListEl = document.getElementById("experience-list");
const resumeCtaEl = document.getElementById("experience-resume-cta");

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderExperienceList() {
    if (!experienceListEl) {
        return;
    }

    experienceListEl.innerHTML = experiences.map((entry, index) => {
        const companyMarkup = entry.companyUrl
            ? `
                <a href="${escapeHtml(entry.companyUrl)}" target="_blank" rel="noopener noreferrer" class="experience-entry-company-link">
                    ${escapeHtml(entry.company)}
                </a>
            `
            : `<span class="experience-entry-company-text">${escapeHtml(entry.company)}</span>`;

        return `
            <article class="experience-entry" style="animation-delay: ${index * 110}ms">
                <div class="experience-entry-period-wrap">
                    <span class="experience-entry-period">${escapeHtml(entry.period)}</span>
                    <span class="experience-entry-timeline"></span>
                </div>
                <div class="experience-entry-content">
                    <div class="experience-entry-header">
                        <h3 class="experience-entry-role">${escapeHtml(entry.role)}</h3>
                        ${companyMarkup}
                    </div>
                    <p class="experience-entry-description">${escapeHtml(entry.description)}</p>
                    <ul class="experience-entry-achievements">
                        ${entry.achievements.map((achievement) => `
                            <li>
                                <span class="experience-entry-bullet">&#8250;</span>
                                <span>${escapeHtml(achievement)}</span>
                            </li>
                        `).join("")}
                    </ul>
                    <div class="project-tags pt-2">
                        ${entry.technologies.map((tech) => `
                            <span class="project-tag">${escapeHtml(tech)}</span>
                        `).join("")}
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function renderResumeCta() {
    if (!resumeCtaEl) {
        return;
    }

    resumeCtaEl.innerHTML = `
        <p class="experience-resume-text mb-4">${escapeHtml(resumeCta.text)}</p>
        <a
            href="${escapeHtml(resumeCta.href)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary px-4 py-3 experience-resume-link"
        >
            ${escapeHtml(resumeCta.label)}
        </a>
    `;
}

renderExperienceList();
renderResumeCta();
