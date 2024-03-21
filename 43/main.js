var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Alice", "Emaily", "Eric"];
function show_magicians(magicians) {
    var show_magicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the great"));
    });
    return greatMagicians;
}
var greatMagicians = __spreadArray(__spreadArray([], magicians, true), ["Maha"], false);
// modifeid
console.log("original magicians:", magicians);
console.log("great magicians:", greatMagicians);
