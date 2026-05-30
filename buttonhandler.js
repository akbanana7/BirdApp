
function buttonEffect(id) { // Function to add a pressed effect to the button when clicked
    const currentButton = document.getElementById(id);
    if (!currentButton) return;
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("DOMContentLoaded", function() { // All button handling goes in here
    // Debug Button code
    const dbgButton = document.getElementById("dbgButton");
    if (!dbgButton) return;

    dbgButton.addEventListener("click", () => {
        buttonEffect("dbgButton");
        window.location.href = "debugPage/index.html";
    });


});