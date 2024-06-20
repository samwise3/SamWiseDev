
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("adviceForm");
    var adviceBoard = document.getElementById("adviceBoard");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var adviceInput = document.getElementById("advice");
        var adviceText = adviceInput.value;

        var adviceDiv = document.createElement("div");
        adviceDiv.className = "message";
        adviceDiv.textContent = adviceText;
        console.log("Advice: ", adviceText);

        adviceBoard.appendChild(adviceDiv);
        console.log("New advice added to the board.");
        
        adviceInput.value = ""; /*reset input box*/

    });

})