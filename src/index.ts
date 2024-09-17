// index.ts
function removeEmptyDivs(): void {
    // Get all div elements on the page
    const divs = document.querySelectorAll<HTMLDivElement>('div');
    
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
export default removeEmptyDivs;