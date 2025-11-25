import "./footer.css";

import { gitHubIcon, linkedinIcon, xIcon, emailIcon } from "../utils/icon";
import { githubURL, linkedinURL, xURL, emailToURL, relation, target } from "../utils/constants";

function footer() {
    const footerWrapperDiv = document.getElementById("footer-wrapper");
    if(!footerWrapperDiv) return;

    const currentYear = new Date().getFullYear();

    const links = [
        { href: githubURL, icon: gitHubIcon.trim(), label: 'GitHub' },
        { href: linkedinURL, icon: linkedinIcon.trim(), label: 'LinkedIn' },
        { href: xURL, icon: xIcon.trim(), label: 'X' },
        { href: emailToURL, icon: emailIcon.trim(), label: 'Email' }
    ];

    const footerInnerHTML = `
        <div class="copyright-div">
            <p class="copyright-text">© ${currentYear} Atul Kumar. All rights reserved.</p>
        </div>
        <div class="footer-icons">
            ${links.map((link) => `
                <a href="${link.href}" target="${target}" rel="${relation}" aria-label="${link.label}">
                    ${link.icon}
                </a>
            `).join('')}
        </div>
    `;

    footerWrapperDiv.innerHTML = footerInnerHTML;
}

export default footer;