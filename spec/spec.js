// Стандартная команда Node.js которая загружает файл
var moduleContainer = require('../app/js/toExponentModule.js');

describe("To exponent", function() {
    it("Должен возводить в степень", function() {
        // prepare
        var result;
        console.log('Проверяем контейнер', moduleContainer);

        // act
        result = moduleContainer.toExponent(2, 2);

        // assert
        expect(result).toBe(4);
    });
});
