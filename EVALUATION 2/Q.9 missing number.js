var missing = (function (arr) {
    var i;
    for (i = 0; i < arr.length; ++i) {
        if (i + arr[0] !== arr[i]) return i + arr[0];
    }
    if (i < 32)            // if none missing inside array and not yet 32nd
        return i + arr[0]; // return next
}([1,2,3,5,6])); // 4
console.log((missing));
