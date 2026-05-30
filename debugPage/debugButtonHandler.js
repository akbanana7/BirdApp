function buttonEffect(id) { // Function to add a pressed effect to the button when clicked
    const currentButton = document.getElementById(id);
    if (!currentButton) return;
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("DOMContentLoaded", function() { // All button handling goes in here
    const ipSubmit = document.getElementById("setIpButton");
    if (!ipSubmit) return;

    ipSubmit.addEventListener("click", () => {
        buttonEffect("setIpButton");
        const ipInput = document.getElementById("ipAddress");
        if (!ipInput) return;
        const newIp = ipInput.value.trim();
        if (newIp) {
            await window.settings.setServerIp(newIp);
        }
        else {
            return;
        }
    });
});