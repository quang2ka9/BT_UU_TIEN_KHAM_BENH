import {Patient} from "./Patient";
import {Queue} from "./Queue";

let Smith = new Patient('Smith', 5);
let Jones = new Patient('Jones',4);
let Fehrenbach = new Patient('Fehrenbach', 6);
let Brown = new Patient('Brown', 1);
let Ingram = new Patient ('Ingram', 1);

let queue = new Queue;

queue.enqueue(Smith);
queue.enqueue(Jones);
queue.enqueue(Fehrenbach);
queue.enqueue(Brown);
queue.enqueue(Ingram);

console.log('***** Show patient list:');
console.log(queue.showPatientList());

console.log('1. *** Do medical examination for the first person in the queue (sorted by priority)!');
let firstPersonInQueue = queue.dequeue();

console.log('***** Done list: ');
console.log(firstPersonInQueue);

console.log('***** The rest of patient list: ');
console.log(queue.showPatientList());

console.log('2. *** Do medical examination for the next one!');
let secondPersonInQueue = queue.dequeue();

console.log('***** Done list: ');
console.log(firstPersonInQueue);
console.log(secondPersonInQueue);

console.log('***** The rest of patient list: ');
console.log(queue.showPatientList())