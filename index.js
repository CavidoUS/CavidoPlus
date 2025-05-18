window.onload = function () {
    const display = document.getElementById('display');

    window.appendToDisplay = function(input) {
        display.value += input;
    };

    window.clearDisplay = function() {
        display.value = '';
    };

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    };
};
