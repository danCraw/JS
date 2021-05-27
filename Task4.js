// 1.	Написать функцию delay(ms), которая будет возвращать промис, разрешающийся через указанное количество ms
const delay = (ms) => {
    const promise = new Promise ((resolve) => {
    	setTimeout(() => {
    		resolve()
    	}, ms)
    })
    return promise
}

delay(1000)
.then(() => {
	console.log(`1 second`)
})
// 2.	Написать свои реализации для методов Promise.all и Promise.race.

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log("standart all ", values);
});

Promise.race([p1, p2, p3]).then(function(array) {
  console.log("standart race ", array);
});


Promise.all = function(promises) {
  return new Promise((success, fail) => {
    let successArr = new Array(promises.length);
    if (promises.length == 0) {
      success(successArr);
    }
    let pending = promises.length;
    promises.forEach(function(promise, i) {
    if (typeof promise != `object`) {
     successArr[i] = promise;
        pending -= 1;
        if (pending == 0) {
          success(successArr);
        }
    } else {
      promise.then(function(result) {
        successArr[i] = result;
        pending -= 1;
        if (pending == 0) {
          success(successArr);
        }
      }, function(error) {
        fail(error);
      });
    }});
  });
}

Promise.race = function(promises) {
  return new Promise((success, fail) => {
     for(const promise of promises)
     	 if (typeof promise != `object`) {
     	 	promise
    } else {
        promise.then(success, fail);
  }});
}

function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}

Promise.all([p1, p2, p3]).then(function(array) {
  console.log("my all ", array);
});

Promise.race([p1, p2, p3]).then(function(array) {
  console.log("my race :", array);
});