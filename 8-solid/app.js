class Billing {
	#_amount = 0;

	calculateTotal(sum = 0) {
		return this.#_amount += sum;
	}
}

class FixedBilling extends Billing {
	constructor() {
		super();
	}
}

class HourBilling extends Billing {
	constructor(hour) {
		super();
		this.Hour = hour;
	}

	calculateTotal(sum) {
		return super.calculateTotal(sum) * this.Hour;
	}
}

class ItemBilling extends Billing {
	constructor(quantity) {
		super();
		this.Quantity = quantity;
	}

	calculateTotal(sum){
		return super.calculateTotal(sum) * this.Quantity;
	}
}

const hourBilling = new HourBilling(8);
console.log(`По часовому расчету вы заработали: ${Intl.NumberFormat('ru-RU', {style: 'currency', currency:'USD'}).format(hourBilling.calculateTotal(33))}`);

const fix = new FixedBilling();
console.log(`По фиксированной ставке вы заработали: ${Intl.NumberFormat('ru-RU', {style: 'currency', currency:'USD'}).format(fix.calculateTotal(200))}`);

const minQuantity = 10;
const item = new ItemBilling(minQuantity);

console.log(`За минимальное количество заказов: ${minQuantity} вы заработали: ${Intl.NumberFormat('ru-RU', {style: 'currency', currency:'USD'}).format(item.calculateTotal(15))}`);


