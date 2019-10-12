var inputValue = document.querySelector("[name='arr']").value;
        var resultDom = document.querySelector("#result");

        var increment = 0;
        var array = inputValue.split(" ");

        array.forEach(function (item, index) {
            if (item % 5 == 0 && item % 9 != 0) {
                increment++;
            }
        })
        if (array.length % 2 == 0) {
            array[array.length - 1] = increment;
        } else {
            array[array.length - 2] = increment;
        }

        //Если надо число
        //resultDom.textContent = increment

        // Если надо массив
        resultDom.textContent = array;

        console.log(resultDom.textContent);