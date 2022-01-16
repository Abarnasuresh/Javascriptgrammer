class ClassMates{
	constructor(name,age){
    	this.name=name;
      	this.age=age;
    }
  	displayInfo(){
    	return this.name + "is " + this.age + " years old!";
    }
}

let classmate = new ClassMates("abi abarna",21);
console.log(classmate.displayInfo());  // result: abi abarna is 21 years old!
