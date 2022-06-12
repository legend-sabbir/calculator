const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const previousDisplay = document.querySelector('[data-previous]');
const currentDisplay = document.querySelector('[data-current]');

class Calculator {
	constructor(currentDisplay, previousDisplay) {
		this.currentDisplay = currentDisplay;
		this.previousDisplay = previousDisplay;
		this.clear();
	}
	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operator = undefined;
	}
	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}
	chooseOperator(operator) {
		if (this.currentOperand == '') return
		if (this.previousOperand != '') {
			this.compute();
		}
		this.operator = operator;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}
	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const curr = parseFloat(this.currentOperand);

		if (isNaN(prev) || isNaN(curr)) return
		switch (this.operator) {
			case '+':
				computation = prev + curr;
				console.log(computation)
				break;
			case '-':
				computation = prev - curr;
				break;
			case '×':
				computation = prev * curr;
				break;
			case '÷':
				computation = prev / curr;
				break;
			default:
				return
		}
		this.currentOperand = computation;
		this.previousOperand = '';
		this.operator = undefined;
	}
	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return
		this.currentOperand = this.currentOperand.toString() + number;
	}
	updateDisplay() {
		this.currentDisplay.innerText = this.currentOperand;
		if (this.operator != null) {
			this.previousDisplay.innerText = `${this.previousOperand} ${this.operator}`;
		} else {
			this.previousDisplay.innerText = '';
		}
	}
}

const calculator = new Calculator(currentDisplay, previousDisplay);

allClearButton.addEventListener('click', button => {
	calculator.clear();
	calculator.updateDisplay();

	setTimeout(() => {
		allClearButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset -4px -4px 4px rgba(0, 0, 0, 0.3),
		inset 4px 4px 4px rgba(255, 255, 255, 0.5)`);

	}, 75);

	allClearButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset 4px 4px 4px rgba(0, 0, 0, 0.3),
		inset -4px -4px 4px rgba(255, 255, 255, 0.5)`)

})

deleteButton.addEventListener('click', button => {
	calculator.delete();
	calculator.updateDisplay();

	setTimeout(() => {
		deleteButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset -4px -4px 4px rgba(0, 0, 0, 0.3),
		inset 4px 4px 4px rgba(255, 255, 255, 0.5)`);

	}, 75);

	deleteButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset 4px 4px 4px rgba(0, 0, 0, 0.3),
		inset -4px -4px 4px rgba(255, 255, 255, 0.5)`)

})
equalButton.addEventListener('click', button => {
	calculator.compute();
	calculator.updateDisplay();

	setTimeout(() => {
		equalButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset -4px -4px 4px rgba(0, 0, 0, 0.3),
		inset 4px 4px 4px rgba(255, 255, 255, 0.5)`);

	}, 75);

	equalButton.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset 4px 4px 4px rgba(0, 0, 0, 0.3),
		inset -4px -4px 4px rgba(255, 255, 255, 0.5)`)

})
for (let i of operatorButtons) {
	i.addEventListener('click', () => {
		calculator.chooseOperator(i.innerText);
		calculator.updateDisplay();

		setTimeout(() => {
			i.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset -4px -4px 4px rgba(0, 0, 0, 0.3),
		inset 4px 4px 4px rgba(255, 255, 255, 0.5)`);

		}, 75);

		i.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset 4px 4px 4px rgba(0, 0, 0, 0.3),
		inset -4px -4px 4px rgba(255, 255, 255, 0.5)`)

	})
}

for (let x of numberButtons) {
	x.addEventListener('click', () => {
		calculator.appendNumber(x.innerText);
		calculator.updateDisplay();

		setTimeout(() => {
			x.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset -4px -4px 4px rgba(0, 0, 0, 0.3),
		inset 4px 4px 4px rgba(255, 255, 255, 0.5)`);

		}, 75);

		x.style.setProperty('--bs', `4px 4px 4px rgba(0, 0, 0, 0.3),
		-4px -4px 4px rgba(255, 255, 255, 0.3),
		inset 4px 4px 4px rgba(0, 0, 0, 0.3),
		inset -4px -4px 4px rgba(255, 255, 255, 0.5)`)

	})
}