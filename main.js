"use strict";
exports.__esModule = true;
var Patient_1 = require("./Patient");
var Queue_1 = require("./Queue");
var Smith = new Patient_1.Patient('Smith', 5);
var Jones = new Patient_1.Patient('Jones', 4);
var Fehrenbach = new Patient_1.Patient('Fehrenbach', 6);
var Brown = new Patient_1.Patient('Brown', 1);
var Ingram = new Patient_1.Patient('Ingram', 1);
var queue = new Queue_1.Queue;
queue.enqueue(Smith);
queue.enqueue(Jones);
queue.enqueue(Fehrenbach);
queue.enqueue(Brown);
queue.enqueue(Ingram);
console.log('***** Show patient list:');
console.log(queue.showPatientList());
console.log('1. *** Do medical examination for the first person in the queue (sorted by priority)!');
var firstPersonInQueue = queue.dequeue();
console.log('***** Done list: ');
console.log(firstPersonInQueue);
console.log('***** The rest of patient list: ');
console.log(queue.showPatientList());
console.log('2. *** Do medical examination for the next one!');
var secondPersonInQueue = queue.dequeue();
console.log('***** Done list: ');
console.log(firstPersonInQueue);
console.log(secondPersonInQueue);
console.log('***** The rest of patient list: ');
console.log(queue.showPatientList());
