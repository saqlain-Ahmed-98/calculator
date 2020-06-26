function getNo(num) {
    var result = document.getElementById("res");
    result.value += num;
}

function clearRes() {
    var result = document.getElementById("res");
    result.value = ""
}

function getRes() {
    var result = document.getElementById("res");
    result.value = eval(result.value)
}