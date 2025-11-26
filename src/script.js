import scrollObserver from "./modules/scrollObserver.js";
import experienceSection from "./modules/experience/experience.js";
import {githubGraph, githubPr} from "./modules/githubGraph/githubGraph.js";
import footer from "./modules/footer/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM loaded, calling experienceSection");
    scrollObserver();
    experienceSection();
    githubPr();
    githubGraph();
    footer();
});