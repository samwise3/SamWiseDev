
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("adviceForm");
    var adviceBoard = document.getElementById("adviceBoard");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var adviceInput = document.getElementById("advice");
        var adviceText = adviceInput.ariaValueMax;

        var adviceElement = document.createElement("p");
        adviceElement.textContent = adviceText;

        adviceBoard.appendChile(adviceElement);

        adviceInput.value = "";
    })
    });

    document.getElementById("advice-box").appendChild(button);
})