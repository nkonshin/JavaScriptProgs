function process() {
    var input = document.querySelector("[name='arr']")
    var resultDom = document.querySelector("#result");
    var inputValue = input.value;
    var increment = 0;
    var array = inputValue.split(" ");

    array.forEach(function (item, index) {
        if (item % 5 == 0 && item % 9 != 0) {
            increment++;
        }
    })
    if(increment != 0) {resultDom.textContent = array}
    else 
    {if (array.length % 2 == 0) {
        array[array.length - 1] = increment;
    } else {
        array[array.length - 2] = increment;
    }}

    // Если надо массив
    resultDom.textContent = array
}