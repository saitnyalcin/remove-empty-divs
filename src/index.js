"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
function removeEmptyDivs() {
    // Get all div elements on the page
    const divs = document.querySelectorAll('div');
    // Iterate over each div
    divs.forEach(div => {
        // Check if the div has no child nodes
        if (div.childNodes.length === 0) {
            // Remove the div
            div.remove();
        }
    });
}
// Export the function as a module
exports.default = removeEmptyDivs;
