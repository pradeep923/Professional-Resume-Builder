
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("resumePage").style.display = "block";
    } else {
        let errorMsg = document.getElementById("loginError");
        errorMsg.innerText = "Invalid username or password!";
        errorMsg.style.display = "block";
    }
}
function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}
window.onload = function () {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("resumePage").style.display = "block";
    }
};
function generateResume() {
    updateTextWithAnimation("previewName", document.getElementById("name").value || "Your Name");
    updateTextWithAnimation("previewRole", document.getElementById("role").value || "Your Job Title");
    updateTextWithAnimation("previewSummary", document.getElementById("summary").value || "Your summary here...");
    updateTextWithAnimation("previewSkills", document.getElementById("skills").value || "Your skills here...");
    updateTextWithAnimation("previewExperience", document.getElementById("experience").value || "Your experience details...");
}
function updateTextWithAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    element.style.opacity = "0";
    element.innerText = text;
    setTimeout(() => {
        element.style.opacity = "1";
        element.style.transition = "opacity 0.8s ease-in-out";
    }, 100);
}
function downloadResume() {
    html2canvas(document.getElementById("resumePreview")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "resume.png";
        link.click();
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
