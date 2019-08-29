class Person{
	constructor(fullName, favColor){
	this.name=fullName;
	this.favoritColor=favColor;
	}
	greet(){
		console.log("Hallo bro "+this.name+" warna "+this.favoritColor);
	}
}
module.exports=Person;