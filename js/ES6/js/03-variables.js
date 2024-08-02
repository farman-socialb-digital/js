separator1 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator2 = ()=> console.log('==============================03-VARIABLES==================================');
separator3 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator1();
separator2();
separator3();

var x = 1;
if (x === 1) {
	var x = 2;
	console.log(x);
}
console.log(x);
let sep1 = ()=> console.log('---');sep1();
function foo() {
	var x = 1;
	function bar() {
		var y = 2;
		console.log(x);
		console.log(y);
	}
	bar();
	console.log(x);
	// console.log(y);
}
foo();
let sep2 = ()=> console.log('---');sep2();

function do_something() {
	var barb = 1110000;
	console.log(barb);
}
do_something();

let sep3 = ()=> console.log('---');sep3();

// const myObject = {
// 	firstName:"Jhon",
// 	lastName:"Doe",
// 	fullName: function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }
// document.getElementById("demo").innerHTML = myObject.fullName();
// console.log(myObject.fullName());

let sep4 = ()=> console.log('---');sep4();