import {Patient} from "./Patient";

export class Queue<T> {
    container: T[] = [];

    constructor() {

    }

    showPatientList() {
        return this
    }

    size() {
        return this.container.length;
    }

    checkPriority() {
        this.container = this.container.sort((a: any, b: any) => b._code - a._code)
    }

    enqueue(patient: T): void {
        this.container.push(patient)
    }

    dequeue() {
        this.checkPriority()
        return this.container.shift()
    }

}