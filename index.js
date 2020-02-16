console.clear();
/*
Обратная польская нотация.
Принцип: дана строчка 23+1-, начинаем двигаться по ней, как только доходим до первого арифметического знака, берем две цифры перед ним и на их место, записываем результат вычисления. Получится 51-. Начинаем все с начала.
2+3-1 = 23+1- = 4;
(2+3)*(3-1) = 23+31-* = 10
(2+3)*(3-1)+1 = 23+31-*1+ = 11
(2+3)*(3-1)+1/2 = 23+31-*1+2/ = 5.5
*/
const str = '23+31-*1+';
const arr = Array.from(str);
console.log(arr);

// проще реализовать с помощью функции. Класс использую в учебных целях
class PN {
    constructor() {
        // this.arr = arr;
        this.myStaсk = [];
    }
    result(arr) {
        // let arr = this.arr;
        let myStaсk = this.myStaсk;
        let res = '';
        for (let i = 0; i < arr.length; ++i) {
            if (!isNaN(arr[i])) {
                myStaсk.push(arr[i]);
            } else {
                console.log(myStaсk[myStaсk.length - 2], arr[i], myStaсk[myStaсk.length - 1]);
                res = eval(`${myStaсk[myStaсk.length - 2]} ${arr[i]} ${myStaсk[myStaсk.length - 1]}`);
                console.log('В стеке до очистки: ', myStaсk);
                myStaсk.pop();
                myStaсk.pop();
                myStaсk.push(res);
                console.log('Промежуточный результат: ', res, 'Стэк: ', myStaсk);
            }
        }
        return res;
    }
}

const pn = new PN(arr);
console.log('РЕЗУЛЬТАТ: ', pn.result(arr));

module.exports = {pn};