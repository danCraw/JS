
function Calculator(numberOrData) {

    if (!new.target) {
        throw new Error('Error in constructor call')
    }

    if (typeof numberOrData === 'number') {
    	this.data = [numberOrData]
	} else {
		this.data = numberOrData
	}

    this.multiply = funcNumber =>{
    	tmp = [...this.data]
    	const num = tmp.pop()
    	tmp.push(num * funcNumber)
    	return new Calculator(tmp)
	}

    this.divide = funcNumber =>{
    	tmp = [...this.data]
    	const num = tmp.pop()
    	tmp.push(num / funcNumber)
    	return new Calculator(tmp)
	}

    this.plus = funcNumber =>{
    	tmp = [...this.data]
    	tmp.push(funcNumber)
    	return new Calculator(tmp)
	}

    this.minus = funcNumber => {
    	tmp = [...this.data]
    	tmp.push(-funcNumber)
    	return new Calculator(tmp)
	}

    this.calculate = () => this.data.reduce((a, b) => a+b);

}
console.log("2 + 2*2", new Calculator(2).plus(2).multiply(2).calculate());

console.log("1*2 + 3*4", new Calculator(1).multiply(2).plus(3).multiply(4).calculate());

console.log("1*2*3 + 4*5*6", new Calculator(1).multiply(2).multiply(3).plus(4).multiply(5).multiply(6).calculate());

const a = new Calculator(2).plus(2);
console.log("a = '2+2'");
console.log("data = ", a.data)

console.log("a + 2", a.plus(2).calculate());

console.log("data = ", a.data)
console.log("a * 2", a.multiply(2).calculate());
