"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(customerName, orderId, amount, isDelivered) {
        this.customerName = customerName;
        this.orderId = orderId;
        this.amount = amount;
        this.isDelivered = isDelivered;
    }
    getOrderId() {
        return this.orderId;
    }
    getAmount() {
        return this.amount;
    }
    getIsDelivered() {
        return this.isDelivered;
    }
    addAmount(value, note) {
        this.amount += value;
        if (note) {
            console.log(note);
        }
    }
    markAsDelivered() {
        this.isDelivered = true;
    }
    applyDiscount(discountPercentage) {
        this.amount -= (this.amount * discountPercentage) / 100;
    }
    toString() {
        return `Order[${this.customerName}, ${this.orderId},${this.amount}, ${this.isDelivered}]`;
    }
}
const order1 = new Order("Ashish", 101, 100, false);
const order2 = new Order("John", 102, 150, true);
const order3 = new Order("Alice", 103, 200, false);
console.log(order1.getAmount());
order1.addAmount(50, "Added extra item");
console.log(order1.getAmount());
order1.applyDiscount(10);
console.log(order1.getAmount());
order1.markAsDelivered();
console.log(order1.toString());
order2.applyDiscount(20);
console.log(order2.toString());
order3.addAmount(30);
console.log(order3.toString());
