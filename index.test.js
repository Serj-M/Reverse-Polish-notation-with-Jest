const {pn} = require('./index.js');

// describe служит для объединения различных тестов на одну функцию
describe('Reverse Polish notation', () => {
    let str1 = '',
        str2 = '';
    let arr1 = [],
        arr2 = [];

    // beforeEach служит для создания тестовых значений перед каждым тестом, заново
    beforeEach(() => {
        str1 = '23+31-*1+';
        arr1 = Array.from(str1);

        str2 = '23+31-*1+2/';
        arr2 = Array.from(str2);
    })

    test('should return expression result', () => {
        // str1 = '23+31-*1+';
        // arr1 = Array.from(str1);
        expect(pn.result(arr1)).toBe(11)

        // str2 = '23+31-*1+2/';
        // arr2 = Array.from(str2);
        expect(pn.result(arr2)).toEqual(5.5)
    })

    // искусственный пример для проверки undefined, null, NaN, 0, ''
    test('should return value', () => {
        // str2 = '23+31-*1+2/';
        // arr2 = Array.from(str2);
        expect(pn.result(arr1)).toBeTruthy()
    })
})
