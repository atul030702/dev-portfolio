import GithubCalendar from "github-calendar";
import 'github-calendar/dist/github-calendar-responsive.css';
import '../githubGraph/graph.css';

function githubGraph() {
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
        // Other options for color, style, etc.
    });
}

export default githubGraph;