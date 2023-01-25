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
    if (a.length < 28 ||  b.length < 28 ) {
        console.log((+a + +b).toString());
        return ((+a + +b).toString());
    }
    else {
        console.log((+a + +b).toExponential().toString());
        return ((+a + +b).toExponential().toString());
    }
}
// sumStrings('712569312664357328695151392', '8100824045303269669937');
