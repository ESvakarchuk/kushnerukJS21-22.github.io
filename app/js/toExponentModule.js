function toExponent() {
    var base = +prompt('Введите число'),
        exponent = +prompt('Введите степень'),
        result = 1;
    for (var i = 0; i < exponent; i++) {
        result = result * base;
    }
    alert('Ваше число = ' + result);
}

var container = {
    toExponent: function(x, n) {
        result = 1;
        for (var i = 0; i < n; i++) {
            result = result * x;
        }
        return result;
    }
};

// Указываем что импортируем именно объект "container"!
module.exports = container;
