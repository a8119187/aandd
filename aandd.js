function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}
/**
 * 1からNまでの数を順にN個挿入する関数
 * @param {array} array
 * @param {int} n
 */
function createSequentialNumbers(array, n) {
    for (var i = 1; i < n + 1; i++) {
        array.push(i);
    }
}