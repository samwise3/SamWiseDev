
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("adviceForm");
    var adviceBoard = document.getElementById("adviceBoard");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var adviceInput = document.getElementById("advice");
        var adviceText = adviceInput.Value;

        var adviceDiv = document.createElement("div");
        adviceDiv.className = "message";
        adviceDiv.textContent = adviceText;

        adviceBoard.appendChild(adviceDiv);

        adviceInput.value = "";
    });

    document.getElementById("adviceBoard").appendChild(button);
})