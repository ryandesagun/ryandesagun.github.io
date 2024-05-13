function makeBigger() {
    alert("Hello, world!");
    var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt";
}

function applyStyle() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");

    if (fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function makeMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    text = text.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    text = sentences.join(".");
    
    textInput.value = text;
}
