separator1 = ()=> console.log('============================================================================');
separator2 = ()=> console.log('==============================05-Destructuring==============================');
separator3 = ()=> console.log('============================================================================');
separator1();
separator2();
separator3();

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(a, b, c, d);

console.log('----------------------------------------------------------------------------');

({a, b, c, ...d} = {a:45, b:78, c:98, d:32, e:19, f:'F'})
console.log(a, b, c, d)

console.log('----------------------------------------------------------------------------');

const fruites = ['Mangoes', 'Bananas', 'Apple'];
[a, b, c] = fruites;
console.log(a, b, c);

console.log('----------------------------------------------------------------------------');

const laptop = {
	modal: 'HP',
	age: '23 Days',
	gender: 'male',
	net: '123',
	start: function(){console.log('started')}
}
let {modal, age, gender, net, start} = laptop;
console.log(modal, age, gender, net, start);

start();