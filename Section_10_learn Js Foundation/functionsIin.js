/*
Function learning patterns
--------------------------
1. Use parameters to send values into a function.
2. Use return to send a value back out of a function.
3. Give each function a unique name in the same file.
4. A function can call another function.
5. A function can return another function.
*/

// 1. Basic function: take a tea order and return a message.
function makeTea(teaOrder) {
    return `Making your ${teaOrder}`;
}

const teaMessage = makeTea("Green Tea");
console.log(teaMessage); // Making your Green Tea

// 2. Nested function: confirmOrder can use teaType from the outer function.
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }

    return confirmOrder();
}

const orderDetails = orderTea("Chai");
console.log(orderDetails); // Order confirmed for Chai

// 3. Arrow function: a shorter way to write a function expression.
const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const totalCost = calculateTotal(500, 3);
console.log(totalCost); // 1500

// 4. Passing one function's result into another function.
function prepareTea(teaName) {
    return teaName;
}

function processTeaOrder(preparedTea) {
    return `Processing order for ${preparedTea}`;
}

const myTea = processTeaOrder(prepareTea("Green Tea"));
console.log(myTea); // Processing order for Green Tea

// 5. Function returning another function.
function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

const teaMake = createTeaMaker();
const result = teaMake("Green Tea");
console.log(result); // Making Green Tea
