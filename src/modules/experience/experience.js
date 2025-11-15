import "./index.css";

import { experienceData } from "../utils/experienceObj";
import { briefcaseIcon, calendarIcon } from "../utils/icon";

function experienceSection() {
    const experienceContentDiv = document.getElementById("experience-content");

    if(!experienceContentDiv) return;

    const experienceItemHTML = experienceData.map((exp) => {
        return `
            <div class="experience-item">
                <div class="icon-container">
                    ${briefcaseIcon}
                </div>
                <div class="experience-card">
                    <h3 class="experience-role">${exp.role}</h3>
                    <div class="experience-meta">
                        <span class="company-name">${exp.company}</span>
                        ${exp.period ? `
                            <span class="dot-separator"></span>
                            <div class="period-container">
                                ${calendarIcon}
                                <span>${exp.period}</span>
                            </div>
                        ` : ''}
                        ${exp.location ? `
                            <span class="dot-separator"></span>
                            <span>${exp.location}</span>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    experienceContentDiv.innerHTML = experienceItemHTML;
}

export default experienceSection;