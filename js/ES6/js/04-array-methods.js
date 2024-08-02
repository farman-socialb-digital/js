separator1 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator2 = ()=> console.log('==============================04-ARRAY METHODS==============================');
separator3 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator1();
separator2();
separator3();


sep1 = ()=> console.log('--- Array Map Method ---');sep1();


let arr1 = [33, 74, 63];
let q = arr1.map((value, index, array)=>{
	console.log(value, index, array);
	return value + index;
})
console.log(q);


sep1 = ()=> console.log('--- Array Filter Method ---');sep1();


let arr2 = [33, 74, 7, 8, 2];
let array2 = arr2.filter((value)=>{
	return value<10;
});
console.log(array2);



sep1 = ()=> console.log('--- Array Reduce Method ---');sep1();


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3 = arr3.reduce((z1, z2)=>{
	return z1 + z2;
})
console.log(array3);