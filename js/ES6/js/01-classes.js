separator1 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator2 = ()=> console.log('==============================01-CLASSES====================================');
separator3 = ()=> console.log('////////////////////////////////////////////////////////////////////////////');
separator1();
separator2();
separator3();

class employee{
	constructor(givenName, givenAge, givenExperience){
		this.name = givenName;
		this.age = givenAge;
		this.experience = givenExperience;
	}
}
printClass = new employee('name', "25 Years", 'experience');
console.log(printClass);