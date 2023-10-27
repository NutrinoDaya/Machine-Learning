// script.js


function form_handler(event) {
    event.preventDefault(); // Don't submit the form normally
}

function send_data() {
    document.querySelector('form').addEventListener("submit", form_handler);

    var fd = new FormData(document.querySelector('form'));
    var xhr = new XMLHttpRequest({ mozSystem: true });
    console.log(fd)
    xhr.open('POST', '/predict', true);
    document.getElementById('prediction').innerHTML = "Wait! Predicting Price.....";

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("done")
            document.getElementById('prediction').innerHTML = "Prediction: ₹ " + xhr.responseText;
        }
    };

    xhr.onload = function () { };
    xhr.send(fd);
}
