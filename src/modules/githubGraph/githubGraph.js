import GithubCalendar from "github-calendar";
import 'github-calendar/dist/github-calendar-responsive.css';
import '../githubGraph/graph.css';

import { prIcon } from "../utils/icon";
import { prArr, relation, target } from "../utils/constants";

export function githubGraph() {
    const container = document.querySelector("#github-contributions-calendar");
    const username = "atul030702";

    if (!container) {
        console.warn("githubGraph: container #github-contributions-calendar not found");
        return;
    }

    if (typeof GithubCalendar !== "function") {
        console.warn("githubGraph: GitHubCalendar import is not a function:", GitHubCalendar);
        return;
    }

    GithubCalendar(container, username, {
        responsive: true,
        summary_text: "Summary of my GitHub contributions"
    });
}

export function githubPr() {
    const prContainer = document.getElementById("github-prs");
    if (!prContainer) return;

    const prInnerHTML = prArr.map(link => {
        return `
            <a class="github-pr-link" href="${link.href}" target="${target}" rel="${relation}">
                ${prIcon}
                <p class="anchor-text">${link.text}</p>
            </a>
        `;
    }).join('');

    prContainer.innerHTML = prInnerHTML;
}