function checkInequalities() {
    // Получаем значения из полей ввода
    const A = parseFloat(document.getElementById('a').value);
    const B = parseFloat(document.getElementById('b').value);
    const C = parseFloat(document.getElementById('c').value);
    
    let result = "";
    let isValid = false;
    
    // Проверяем условие A < B
    if (A < B) {
        // Проверяем какое неравенство выполняется
        if (B < C) {
            result = "Выполняется неравенство: A < B < C";
            isValid = true;
        } else if (B > C) {
            result = "Выполняется неравенство: A < B > C";
            isValid = true;
        } else {
            result = "Не выполняется: A < B, но B = C";
            isValid = false;
        }
    } else {
        result = "Не выполняется: основное условие A < B не выполняется";
        isValid = false;
    }
    
    // Выводим результат
    document.getElementById('result').value = result;
    return isValid;
}

function sendToServer() {
    // Проверяем неравенства перед отправкой
    const isValid = checkInequalities();
    
    // Если выполняется одно из нужных неравенств, отправляем форму
    if (isValid) {
        document.getElementById('UserEnter').submit();
    } else {
        alert("Отправка невозможна: неравенства A < B < C или A < B > C не выполняются.");
    }
}

// Назначаем обработчики событий
document.getElementById('verify').addEventListener('click', checkInequalities);
document.getElementById('send').addEventListener('click', sendToServer);