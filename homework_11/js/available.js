"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addAvailability(isAval) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.available = isAval;
            }
            return class_1;
        }());
    };
}
exports.addAvailability = addAvailability;
