"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.showPatientList = function () {
        return this;
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    Queue.prototype.checkPriority = function () {
        this.container = this.container.sort(function (a, b) { return b._code - a._code; });
    };
    Queue.prototype.enqueue = function (patient) {
        this.container.push(patient);
    };
    Queue.prototype.dequeue = function () {
        this.checkPriority();
        return this.container.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
