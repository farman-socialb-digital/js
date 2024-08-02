separator1 = ()=> console.log('============================================================================');
separator2 = ()=> console.log('==============================06-Spread Operator============================');
separator3 = ()=> console.log('============================================================================');
separator1();
separator2();
separator3();

let arraySpreadOperator1 = [1, 2, 3];
let arraySpreadOperator2 = [4,...arraySpreadOperator1, 5, 6];

let arraySpreadOperator3 = [...arraySpreadOperator1, ...arraySpreadOperator2];

console.log(arraySpreadOperator3);