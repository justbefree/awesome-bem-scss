"use strict";
/*
* @Author: Just be free
* @Date:   2020-08-05 16:09:55
* @Last Modified by:   Just be free
* @Last Modified time: 2020-08-05 19:24:52
* @E-mail: justbefree@126.com
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBem = void 0;
var BEM = /** @class */ (function () {
    function BEM() {
    }
    BEM.config = function (options) {
        console.log("pass BEM config ", options);
        var _a = options.blockPrefix, blockPrefix = _a === void 0 ? "yui" : _a, _b = options.modifierSeparator, modifierSeparator = _b === void 0 ? "--" : _b, _c = options.elementSeparator, elementSeparator = _c === void 0 ? "__" : _c;
        BEM.blockPrefix = blockPrefix;
        BEM.modifierSeparator = modifierSeparator;
        BEM.elementSeparator = elementSeparator;
    };
    BEM.parse = function (name) {
        if (typeof name === "string") {
            return name;
        }
        else {
            var key = Object.keys(name)[0];
            var value = name[key];
            if (typeof value === "string") {
                return "" + key + BEM.modifierSeparator + value;
            }
            else {
                var attr = Object.keys(value)[0];
                return "" + key + BEM.modifierSeparator + attr + BEM.modifierSeparator + value[attr];
            }
        }
    };
    BEM.create = function (b, e) {
        var block = BEM.parse(b);
        var element = e ? BEM.parse(e) : "";
        return element === "" ? "" + BEM.blockPrefix + block : "" + BEM.blockPrefix + block + BEM.elementSeparator + element;
    };
    BEM.blockPrefix = "bem-";
    BEM.modifierSeparator = "--";
    BEM.elementSeparator = "__";
    return BEM;
}());
;
exports.default = BEM;
exports.createBem = function (b, e) {
    return BEM.create(b, e);
};
