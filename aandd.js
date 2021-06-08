function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}
/**
 * 1からNまでの数を順にN個挿入する関数
 * @param {Array} array
 * @param {Number} n
 */
function createSequentialNumbers(array, n) {
    for (var i = 1; i < n + 1; i++) {
        array.push(i);
    }
}

/**
 * N個の乱数を挿入する関数
 * @param {Array} array
 * @param {Number} n
 */
function createRandomNumbers(array, n) {
    for (var i = 1; i < n + 1; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
}

function createOrderedRandomNumbers(numbers, n) {
    var count = 0;
    for (var i = 1; ; i++) {
        if (Math.floor(Math.random() * 3) == 0) {
            numbers.push(i);
            count++;
            if (count >= n) {
                break;
            }
        }
    }
}