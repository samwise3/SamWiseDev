
document.addEventListener("DOMContentLoaded", function() {
    var button = document.createElement("button");

    button.innerHTML= "Submit";
    button.type = "submit";
    button.id = "submitButton";

    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Form submitted");
    });

    document.getElementById("advice-box").appendChild(button);
})