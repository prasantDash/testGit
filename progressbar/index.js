//clouser in javascript
let add = (function(){
	var counter = 0;
	return function(){
		counter = counter + 1;
		return counter;
	}
})();

class Car{
	constructor(name,year){
		this.name = name;
		this.year = year;
	}

	getCarCompany(){
		return this.name;
	}

	getCarYear(){
		return this.year;
	}
}

let ford = new Car("Ford","2002");
let hundai = new Car("Hundai","2001");
console.log(ford.getCarCompany());
console.log(hundai);