import scrollObserver from "./modules/scrollObserver.js";

import experienceSection from "./modules/experience/experience.js";

document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM loaded, calling experienceSection");
    scrollObserver();
    experienceSection();
});