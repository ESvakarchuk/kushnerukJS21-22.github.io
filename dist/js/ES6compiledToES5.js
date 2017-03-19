
$(function () {

'use strict';

    var $modalWin = $('#win');
    var reseter = true;
    var testQuestions = {
        questionList: {
            titles: ['1. Что будет, если объявить переменную внутри функции без использования var?', '2. Выберите правильно созданный объект:', '3. С помощью какого цикла мы сможем обойти все поля объекта?'],
            answers: ['a. Можно случайно перезаписать глобальную переменную с таким же именем', 'b. Программа выдаст ошибку', 'c. Ошибки не будет, но переменная не будет создана', 'a. var obj = {prop1: 1; prop2: 2};', 'b. var obj = {prop1: 1, prop2: 2};', 'c. var obj = {prop1 = 1, prop2 = 2};', 'a. for', 'b. do while', 'c. for in']
        }
    };

    var storageHandler = {
        toLocalStorage: function toLocalStorage(data) {
            localStorage.setItem('questions', JSON.stringify(data));
        },
        fromLocalStorage: function fromLocalStorage(key) {
            var storage = localStorage.getItem(key);
            var dataObject = JSON.parse(storage);
            return dataObject;
        }
    };

    storageHandler.toLocalStorage(testQuestions.questionList);

    function htmlGenerator() {
        var text = storageHandler.fromLocalStorage('questions');
        console.log(text);
        var template = _.template($('#test-pattern').html());
        var html = template(text);
        $('body').append(html);
    }

    htmlGenerator();

    // Создаем функцию-валидатор для теста.
    function validator() {
        if ($("input:radio:checked").length < 3) {
            reseter = false;
            $('.visible>h3').text("Внимание.");
            $('.content>p').text("Вы ответили не на все вопросы!");
            $modalWin.fadeToggle();
        } else {
            if ($('.input_0').is(":checked") && $('.input_4').is(":checked") && $('.input_8').is(":checked")) {
                reseter = true;
                $('.visible>h3').text("Поздравляем!");
                $('.content>p').text("Вы успешно прошли тест.");
                $modalWin.fadeToggle();
            } else {
                reseter = true;
                $('.visible>h3').text("У Вас не получилось.");
                $('.content>p').text("Попробуйте еще раз!");
                $modalWin.fadeToggle();
            }
        }
    }
    // Вешаем обработчики на кнопки.
    $('.submit-button').on('click', function (e) {
        e.preventDefault();
        validator();
    });

    $('#modalButton').on('click', function () {
        $modalWin.fadeToggle();
        if (reseter) {
            $('form').trigger('reset');
        }
    });
});
