import { prIcon } from "../utils/icon";
import { prArr, relation, target } from "../utils/constants";

function githubPr() {
    const prContainer = document.getElementById("github-prs");
    if (!prContainer) return;

    const prInnerHTML = prArr.map(link => {
        return `
            <a href="${link.href}" target="${target}" rel="${relation}">
                ${prIcon}
                <p>${link.text}</p>
            </a>
        `;
    }).join('');

    prContainer.innerHTML = prInnerHTML;
}

export default githubPr;