

exports.cToF = function (c) {
    let f = c * 9 / 5 + 32;
    return f.toFixed(2);
}

exports.fToC = function (f) {
    let c = (f - 32) * 5 / 9;
    return c.toFixed(2);
}
