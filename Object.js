
// Reference Type

// var object1 = { value: 10};
// var object2 = object1;
// var object3 = { value: 10};

// context

// function a(){
// 	console.log(this);
// }

// a();

// const object4 = {
// 	a: function(){
// 		console.log(this);
// 	}
// }

// object4.a();

// instantiation

// class player{
// 	constructor(name, type){
// 		console.log('player', this);
// 		this.name = name;
// 		this.type = type;
// 	}
// 	introduce(){
// 	console.log(`Hi I am ${this.name}, I am ${this.type}`);
// }



// class wizard extends player{
// 	constructor(name, type){
// 		super(name, type);
// 		console.log('wizard', this);
// 	}
// 	player(){
// 		console.log(`HEEEEE I'am a ${this.type}`);
// 	}
// };

// const wizard1 = newWizard ('Shelly', 'Healer');
// const wizard2 = newWazard ('Shawn','Dark magic');

// QUICK NOTE

// let obj1 = {name: 'yao', password: '12345'};
// let obj2 = obj1;

// obj2.password

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = object.assign({}, obj);
let clone2 = {... obj}
let superClone = JSON.PARSE(json.stringify(obj));
obj.c = 5;
console.log(clone);
console.log(clone2);
console.log(superClone);
