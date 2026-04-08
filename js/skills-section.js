import {
    currentlyExploring,
    skillCategories,
    skillsIntro,
} from "../data/skills.js";

const introEl = document.getElementById("skills-intro");
const gridEl = document.getElementById("skills-grid");
const exploringEl = document.getElementById("skills-exploring-list");

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderSkillsIntro() {
    if (introEl) {
        introEl.textContent = skillsIntro;
    }
}

function renderSkillCards() {
    if (!gridEl) {
        return;
    }

    gridEl.innerHTML = skillCategories.map((category, index) => `
        <div class="col-md-6">
            <article
                class="skills-card skills-card--${escapeHtml(category.tone)}"
                data-skills-card
                style="animation-delay: ${index * 90}ms"
            >
                <div class="skills-card-wash"></div>
                <div class="skills-card-inner">
                    <div class="d-flex align-items-start justify-content-between gap-3 mb-4">
                        <div>
                            <h3 class="skills-card-title">${escapeHtml(category.title)}</h3>
                            <p class="skills-card-subtitle mb-0">${escapeHtml(category.subtitle)}</p>
                        </div>
                        <span class="skills-card-badge">${escapeHtml(category.badge)}</span>
                    </div>
                    <div class="skills-card-tags">
                        ${category.skills.map((skill) => `
                            <span class="skills-card-tag">${escapeHtml(skill)}</span>
                        `).join("")}
                    </div>
                </div>
            </article>
        </div>
    `).join("");
}

function renderCurrentlyExploring() {
    if (!exploringEl) {
        return;
    }

    exploringEl.innerHTML = currentlyExploring.map((item) => `
        <span class="skills-exploring-tag">${escapeHtml(item)}</span>
    `).join("");
}

function bindSkillHoverState() {
    if (!gridEl) {
        return;
    }

    const cards = Array.from(gridEl.querySelectorAll("[data-skills-card]"));

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            cards.forEach((entry) => {
                entry.classList.toggle("is-muted", entry !== card);
            });
        });

        card.addEventListener("mouseleave", () => {
            cards.forEach((entry) => entry.classList.remove("is-muted"));
        });
    });
}

renderSkillsIntro();
renderSkillCards();
renderCurrentlyExploring();
bindSkillHoverState();
