// 1.	Расширить массивы методами first, last, random (возвращают, соответственно, первый, последний и случайный элемент массива).
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))]
}

Array.prototype.first = function () {
  return this[0]
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

console.log([1, 2, 3].first())
console.log([1, 2, 3].last())
console.log([1, 2, 3].random())

// 2.	Написать функцию createClass, которая принимает объект вида { constructor, …properties, …methods }  и возвращает функцию, аналогичную классу ES6, созданному с таким же конструктором, методами и свойствами. 
let createClass = (function(){
 
  // Экземпляр базового класса
  this.myClass = function(){};
   
  // Создаём новый класс, наследуемый от текущего
  myClass.extend = function(prop) {
    let _super = this.prototype;
     
    // Создание экземпляра класса
    initializing = true;
    let prototype = new this();
    initializing = false;
     
    // Копируем свойства в новый прототип 
    for (let name in prop) {
      // Проверяем, не перезаписываем ли мы текущую фуекцию 
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            let tmp = this._super;
             
            // Добавление _super
            this._super = _super[name];
             
            //Временно привязываем метод и потом удаляем его, когда заканчиваем выполнение
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
             
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
     
    // конструктор фиктивного класс
    function myClass() {
      // Вся конструкция фактически выполняется в методе init
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
     
	// Заполняем сделанный объект-прототип   
	 myClass.prototype = prototype;
     
    // Делаем конструктор тем, что мы ожидаем
    myClass.prototype.constructor = myClass
    // Делаем этот класс наследуемым
    myClass.extend = arguments.callee;
    
    return myClass;
  };

})();

const Cat = myClass.extend({
  init(name) {
    this.name = name;
  },

  meow() {
    console.log(`I'm ${this.name}`);
  }
})

const barsik = new Cat(`barsik`)
barsik.meow()

// 3.	Написать функцию extend, которая принимает два класса (обычные или результат из createClass) и делает первый класс наследником второго.

function contains(element, arr) {
    for (i of arr) {
        if (_.isEqual(i,  element)) {
            return true
        }
    }
    return false
}

function sameElements(arr1, arr2){
	return arr1.filter(function(obj) { return arr2.indexOf(obj) >= 0; 	});
}

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  setName(name){
  	this.name = name
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runing with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stand.`);
  }
}

class Rabbit {
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    this.hide(); 
  }
}

function extend(child, parent){
	const parentMethods = Object.getOwnPropertyNames(parent.__proto__)
	const childMethods = Object.getOwnPropertyNames(child.__proto__)

	sameMethods = sameElements(parentMethods, childMethods)

		for (let i = 0; i< parentMethods.length; i++) {
			if (!contains(parentMethods[i], sameMethods)) {
				child[parentMethods[i]] = parent[parentMethods[i]]
			}

		}

	child.__proto__.constructor = parent

	return child
}

let rabbit = extend(new Rabbit, new Animal)

rabbit.setName(`white rabbit`)
rabbit.run(5)
rabbit.stop()
rabbit.hide()