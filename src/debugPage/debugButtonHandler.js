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
    const ip = await getServerIp();
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
            } else {
                console.error("saving messed up");
            }
        } else {
            return;
        }
    });


});