class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = 'OPTIONS';
        aReturn.push("Welcome to 6ixty Wings!");
        aReturn.push("Would you like to order Wings or Loaded Fries?");
        console.log(this);
        return aReturn;
      },

      OPTIONS: (sInput) => {
        let aReturn = [];
        this.order = {};
        this.order.item = sInput.trim().toLowerCase();
        if (this.order.item === "wings"){
            aReturn.push("Would you like them sauced in Sweet Thai, BBQ, Buffalo, or Honey Garlic?");
            this.stateCur = 'SIZE';
        }else if (this.order.item === "loaded fries"){
            aReturn.push("Would you like them to be Mild, Medium, or Hot Spicy?");
            this.stateCur = 'SIZE';
        }
        this.stateCur = 'FOOD';
        return aReturn;
      },

      FOOD: () => {
        let aReturn = [];
        this.stateCur = 'SIZE';
        aReturn.push("WOW, your choice is amazing! What size would like you to order? We have Small, Medium, and Large.");
        return aReturn;
      },

      SIZE: (sInput) => {
        let aReturn = [];
        this.order = {};
        this.order.size = sInput.trim().toLowerCase();
        if (this.order.size === "small" || this.order.size === "medium" || this.order.size === "large") {
            aReturn.push(`Perfect, you have selected ${this.order.size}!`);
          aReturn.push("Would you like to proceed with your order?");
            this.stateCur = 'CONFIRMATION';
    } else {
        aReturn.push("Invalid Size Selection. Please select Small, Medium, or Large.");    }
        return aReturn;
      },

       CONFIRMATION: (sInput) => {
    let aReturn = [];
    if (sInput.trim().toLowerCase() === 'yes') {
        aReturn.push("Would you like to make it a Combo by adding a surprise soft drink for $1.99?");
        this.stateCur = 'COMBO';
    } else if (sInput.trim().toLowerCase() === 'no') {
        aReturn.push("Perfect, your order has been confirmed without the combo.");
        this.stateCur = 'WELCOMING';
    } else {
        aReturn.push("Invalid input. Please respond with 'yes' or 'no'.");
    }
    return aReturn;
    },

      COMBO: (sInput) => {
        let aReturn = [];
        if (sInput.trim().toLowerCase().startsWith('yes')){
            aReturn.push("Perfect, your order has been confirmed with the combo. It will be ready for pickup in 15 minutes at 123 Elmo Street, Toronto ON. See you then!");
                    this.stateCur = 'WELCOMING';
        } else if (sInput.trim().toLowerCase().startsWith('no')) {
            aReturn.push("Perfect, your order has been confirmed without the combo. It will be ready for pickup in 15 minutes at 123 Elmo Street, Toronto ON. See you then!");
            this.stateCur = 'WELCOMING';
        }
        return aReturn;
      }
    };
    this.stateCur = 'WELCOMING';
    this.isDone = false;
    this.sFrom = sFrom;
  }
handleInput(sInput) {
    return this.OrderState[this.stateCur](sInput);
}

isDone() {
    return this.isDone;
}
}
export { RapidTestOrder };