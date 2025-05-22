function getDisplayElement() {
    return document.getElementById("display");
}

function appendValue(value) {
    let display = getDisplayElement();
    display.value += value;
}

function clearDisplay() {
    let display = getDisplayElement();
    display.value = "";
}

function deleteLast() {
    let display = getDisplayElement();
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = getDisplayElement();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}