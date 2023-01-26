window.onload = function () {
    Particles.init
        ({
            selector: '.background'
        });
};


function sumStrings(a, b) {
    console.log(a, b);
    // if (Number.isSafeInteger(+a) && (Number.isSafeInteger(+b))) {
    console.log((BigInt(a) + BigInt(b)).toString());
    if (a.length < 28 || b.length < 28) {
        console.log((+a + +b).toString());
        return ((+a + +b).toString());
    }
    else {
        console.log((+a + +b).toExponential().toString());
        return ((+a + +b).toExponential().toString());
    }
}
// sumStrings('712569312664357328695151392', '8100824045303269669937');
// =====================================================================================================================================
// Moving Zeros To The End
function moveZeros(arr) {
    console.log(arr);
    let count = 0;
    let prev = 0;
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
            arr.slice(prev, i).map(item => out.push(item))
            prev = i + 1;
        }
    }
    arr.slice(prev, arr.length).map(item => out.push(item))
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            out.push(0);
        }
    }
    console.log(out);
    return (out);

}
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
// ===========================================
// return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
// ];
// ===========================================
// return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
// ===========================================
// return arr
//     .filter((val) => val !== 0)
//     .concat(arr.filter((val) => val === 0));
// ===========================================
// return arr.sort((a, b) => b === 0 ? -1 : 0);
// ===========================================
// let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
// ====================================================================================================================================
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
    console.log(str);
    let temp = '';
    let tt = str.split(' ');
    tt.map((item, i) => {
        item != "!" && item != "?" ?
            i == tt.length - 1 ? temp += item.slice(1, item.length) + item[0] + 'ay' :
                temp += item.slice(1, item.length) + item[0] + 'ay' + ' '
            :
            item
    })
    console.log(temp);
}
// pigIt('Pig latin is cool');
// return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// =====================================
// return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
// });
// =====================================
// var arrayWord = str.split(' ');
// return arrayWord.map(function (word) {
//     var firstLetter = word.charAt(0);
//     return word.slice(1) + firstLetter + 'ay';
// }).join(' ');
// =====================================
// return str.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ")
// =====================================