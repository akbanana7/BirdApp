import { getServerIp, setServerIp } from "../storage/settings.js";
function buttonEffect(id) { // Function to add a pressed effect to the button when clicked
    const currentButton = document.getElementById(id);
    if (!currentButton) return;
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("DOMContentLoaded", async function() { // All button handling goes in here
    const ipSubmit = document.getElementById("setIpButton");
    if (!ipSubmit) return;
    const backButton = document.getElementById("backButton");
    if (!backButton) return;
    const pingButton = document.getElementById("pingButton");
    if (!pingButton) return;

    backButton.addEventListener("click", () => {
        buttonEffect("backButton");
        window.location.href = "../index.html";
    });


    let ip = await getServerIp();
    console.log("Current stored IP:", ip);

    ipSubmit.addEventListener("click", async () => {
        buttonEffect("setIpButton");
        const ipInput = document.getElementById("ipAddress");
        if (!ipInput) return;
        const newIp = ipInput.value.trim();
        if (newIp) {
            console.log(newIp);
            if (setServerIp) {
                await setServerIp(newIp);
                ip = newIp; // Update the local variable with the new IP
            } else {
                console.error("saving messed up");
            }
        } else {
            return;
        }
    });

    pingButton.addEventListener("click", async () => {
        buttonEffect("pingButton");
        try {
            const response = await fetch(`http://${ip}:8080/ping`, { // May have to change between http and https depending on how the server is set up
                method: "GET"
            });
            console.log("Ping response status:", response.status);
            const pingResult = document.getElementById("pingResult");
            pingResult.textContent = `Server is reachable. Status: ${response.status}`;
        } catch (error) {
            console.error("Error occurred while pinging server:", error);
            const pingResult = document.getElementById("pingResult");
            pingResult.textContent = "Error occurred while pinging server.";
        }

    });


});