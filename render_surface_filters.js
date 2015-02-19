// https://code.google.com/p/chromium/codesearch#chromium/src/cc/output/render_surface_filters.cc

exports._ = exports.GenerateMatrixOutput = function (matrix, x, y) {
    return (x || 5) + 'x' + (y || 4) + ':' + matrix.join(',')
}

exports.GenerateEmptyMatrix = function (length) {
    return Array.apply(null, new Array(length || 20)).map(String.prototype.valueOf, '0.0')
}

exports.GetHueRotateMatrix = function (hue) {
    matrix = []
    
    cos_hue = Math.cos(hue * Math.PI / 180.0)
    sin_hue = Math.sin(hue * Math.PI / 180.0)

    matrix[00] = 0.2130 + cos_hue * 0.7870 - sin_hue * 0.2130
    matrix[01] = 0.7150 - cos_hue * 0.7150 - sin_hue * 0.7150
    matrix[02] = 0.0720 - cos_hue * 0.0720 + sin_hue * 0.9280
    matrix[05] = 0.2130 - cos_hue * 0.2130 + sin_hue * 0.1430
    matrix[06] = 0.7150 + cos_hue * 0.2850 + sin_hue * 0.1400
    matrix[07] = 0.0720 - cos_hue * 0.0720 - sin_hue * 0.2830
    matrix[10] = 0.2130 - cos_hue * 0.2130 - sin_hue * 0.7870
    matrix[11] = 0.7150 - cos_hue * 0.7150 + sin_hue * 0.7150
    matrix[12] = 0.0720 + cos_hue * 0.9280 + sin_hue * 0.0720
    matrix[03] = matrix[04] = 
    matrix[08] = matrix[09] = 
    matrix[13] = matrix[14] =
    matrix[15] = matrix[16] = 
    matrix[17] = matrix[19] = 0.0
    matrix[18] = 1.0

    return matrix
}

exports.GetContrastMatrix = function (amount) {
    matrix = exports.GenerateEmptyMatrix()

    matrix[0] = matrix[6] = matrix[12] = amount
    matrix[4] = matrix[9] = matrix[14] = (-0.50 * amount + 0.50) * 255.0
    matrix[18] = 1.0

    return matrix
}

exports.GetInvertMatrix = function (amount) {
    matrix = exports.GenerateEmptyMatrix()

    matrix[00] = matrix[06] = matrix[12] = 1.0 - 2.0 * amount
    matrix[04] = matrix[09] = matrix[14] = amount * 255.0
    matrix[18] = 1.0
    
    return matrix
}

exports.GetOpacityMatrix = function (amount) {
    matrix = exports.GenerateEmptyMatrix()

    matrix[00] = matrix[06] = matrix[12] = 1.0;
    matrix[18] = amount;

    return matrix
}

exports.GetGrayscaleMatrix = function (amount) {
    matrix = []

    matrix[00] = 0.21260 + 0.78740 * amount;
    matrix[01] = 0.71520 - 0.71520 * amount;
    matrix[02] = 1.0 - (matrix[00] + matrix[01]);

    matrix[05] = 0.21260 - 0.21260 * amount;
    matrix[06] = 0.71520 + 0.28480 * amount;
    matrix[07] = 1.0 - (matrix[05] + matrix[06]);

    matrix[10] = 0.21260 - 0.21260 * amount;
    matrix[11] = 0.71520 - 0.71520 * amount;
    matrix[12] = 1.0 - (matrix[10] + matrix[11]);
    
    matrix[03] = matrix[04] = 
    matrix[08] = matrix[09] = 
    matrix[13] = matrix[14] =
    matrix[15] = matrix[16] = 
    matrix[17] = matrix[19] = 0.0

    matrix[18] = 1.0;

    return matrix
}

exports.GetSaturateMatrix = function (amount) {
    matrix = []

    matrix[00] = 0.2130 + 0.7870 * amount
    matrix[01] = 0.7150 - 0.7150 * amount
    matrix[02] = 1.0 - (matrix[00] + matrix[01])
    matrix[05] = 0.2130 - 0.2130 * amount
    matrix[06] = 0.7150 + 0.2850 * amount
    matrix[07] = 1.0 - (matrix[05] + matrix[06])
    matrix[10] = 0.2130 - 0.2130 * amount
    matrix[11] = 0.7150 - 0.7150 * amount
    matrix[12] = 1.0 - (matrix[10] + matrix[11])
    matrix[03] = matrix[04] = 
    matrix[08] = matrix[09] = 
    matrix[13] = matrix[14] = 
    matrix[15] = matrix[16] = 
    matrix[17] = matrix[19] = 0.0
    matrix[18] = 1.0

    return matrix
}

exports.GetSepiaMatrix = function (amount) {
    matrix = []

    matrix[00] = 0.3930 + 0.6070 * amount;
    matrix[01] = 0.7690 - 0.7690 * amount;
    matrix[02] = 0.1890 - 0.1890 * amount;

    matrix[05] = 0.3490 - 0.3490 * amount;
    matrix[06] = 0.6860 + 0.3140 * amount;
    matrix[07] = 0.1680 - 0.1680 * amount;

    matrix[10] = 0.2720 - 0.2720 * amount;
    matrix[11] = 0.5340 - 0.5340 * amount;
    matrix[12] = 0.1310 + 0.8690 * amount;

    matrix[03] = matrix[04] = 
    matrix[08] = matrix[09] = 
    matrix[13] = matrix[14] =
    matrix[15] = matrix[16] = 
    matrix[17] = matrix[19] = 0.0

    matrix[18] = 1.0;

    return matrix
}
