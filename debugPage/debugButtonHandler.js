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

    ipSubmit.addEventListener("click", async () => {
        buttonEffect("setIpButton");
        const ipInput = document.getElementById("ipAddress");
        if (!ipInput) return;
        const newIp = ipInput.value.trim();
        if (newIp) {
            console.log(newIp);
            if (window.settings && typeof window.settings.setServerIp === "function") {
                await window.settings.setServerIp(newIp);
            } else {
                console.error("window.settings.setServerIp is not available");
            }
        } else {
            return;
        }
    });
});