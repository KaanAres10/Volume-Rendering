/** The methods of interpolation between color stops. See https://github.com/d3/d3-interpolate#color-spaces. */
export var InterpolationMethod;
(function (InterpolationMethod) {
    InterpolationMethod["RGB"] = "RGB";
    InterpolationMethod["HSL"] = "HSL";
    InterpolationMethod["HSL_LONG"] = "HSL_LONG";
    InterpolationMethod["HSV"] = "HSV";
    InterpolationMethod["HSV_LONG"] = "HSV_LONG";
    InterpolationMethod["HCL"] = "HCL";
    InterpolationMethod["HCL_LONG"] = "HCL_LONG";
    InterpolationMethod["LAB"] = "LAB";
    InterpolationMethod["CUBEHELIX"] = "CUBEHELIX";
    InterpolationMethod["CUBEHELIX_LONG"] = "CUBEHELIX_LONG";
})(InterpolationMethod || (InterpolationMethod = {}));
