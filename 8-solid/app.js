class Billing {
	Amount = 0;

	calculateTotal(sum = 0) {
		return this.Amount += sum;
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