import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialize each value state
    this.state = {
      fullname: "",
      address: "",
      phone: "",
      picked_pizza: "",
      pizza_size: "",
      pizza_cost: 0,
      pizza_quantity: 0,
      picked_sandwich: "",
      sandwich_cost: 0,
      sandwich_quantity: 0,
      picked_drink: "",
      drink_size: "",
      drink_cost: 0,
      drink_quantity: 0,
      orderDetails: "",
    };

    //Bind each state with their respective event handler
    this.handleFullname = this.handleFullname.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handlePickedPizza = this.handlePickedPizza.bind(this);
    this.handlePizzaSize = this.handlePizzaSize.bind(this);
    this.handlePizzaCost = this.handlePizzaCost.bind(this);
    this.handlePizzaQuantity = this.handlePizzaQuantity.bind(this);
    this.handlePickedSandwich = this.handlePickedSandwich.bind(this);
    this.handleSandwichCost = this.handleSandwichCost.bind(this);
    this.handleSandwichQuantity = this.handleSandwichQuantity.bind(this);
    this.handlePickedDrink = this.handlePickedDrink.bind(this);
    this.handleDrinkSize = this.handleDrinkSize.bind(this);
    this.handleDrinkCost = this.handleDrinkCost.bind(this);
    this.handleDrinkQuantity = this.handleDrinkQuantity.bind(this);
    this.checkOrder = this.checkOrder.bind(this);
  }

  //List of event handlers
  handleFullname(event) {
    this.setState({ fullname: event.target.value });
  }
  handleAddress(event) {
    this.setState({ address: event.target.value });
  }
  handlePhone(event) {
    this.setState({ phone: event.target.value });
  }
  handlePickedPizza(event) {
    this.setState({ picked_pizza: event.target.value });
  }
  handlePizzaSize(event) {
    this.setState({ pizza_size: event.target.value });
  }
  handlePizzaCost(event) {
    this.setState({ pizza_cost: event.target.value });
  }
  handlePizzaQuantity(event) {
    this.setState({ pizza_quantity: event.target.value });
  }
  handlePickedSandwich(event) {
    this.setState({ picked_sandwich: event.target.value });
  }
  handleSandwichCost(event) {
    this.setState({ sandwich_cost: event.target.value });
  }
  handleSandwichQuantity(event) {
    this.setState({ sandwich_quantity: event.target.value });
  }
  handlePickedDrink(event) {
    this.setState({ picked_drink: event.target.value });
  }
  handleDrinkSize(event) {
    this.setState({ drink_size: event.target.value });
  }
  handleDrinkCost(event) {
    this.setState({ drink_cost: event.target.value });
  }
  handleDrinkQuantity(event) {
    this.setState({ drink_quantity: event.target.value });
  }

  checkOrder(event) {
    //Check for pizza size
    if (this.pizza_size === "Small") {
      this.setstate({ pizza_cost: 8.5 })
    }
    if (this.pizza_size === "Medium") {
      this.setstate({ pizza_cost: 11.5 })
    }
    if (this.pizza_size === "Large") {
      this.setstate({ pizza_cost: 14.0 })
    }
    if (this.pizza_size === "Extra Large") {
      this.setstate({ pizza_cost: 16.5 })
    }

    //Check type of sandwich
    if (this.picked_sandwich === "All Garden Vegetarian") {
      this.setstate({ sandwich_cost: 7.5 })
    }
    if (this.picked_sandwich === "Big Beef on a Bun") {
      this.setstate({ sandwich_cost: 8.5 })
    }
    if (
      this.picked_sandwich === "Mixed Grill" ||
      this.picked_sandwich === "Grilled Pork"
    ) {
      this.setstate({ sandwich_cost: 9.5 })
    }

    //Check size of drink
    if (this.drink_size === "Small") {
      this.setstate({ drink_cost: 1.25 })
    }
    if (this.drink_size === "Medium") {
      this.setstate({ drink_cost: 1.75 })
    }
    if (this.drink_size === "Large") {
      this.setstate({ drink_cost: 2.00 })
    }

    //Calculate Total Cost
    const totalCost =
      this.state.pizza_cost * this.state.pizza_quantity +
      this.state.sandwich_cost * this.state.sandwich_quantity +
      this.state.drink_cost * this.state.drink_quantity;

    //Popup box of order details
    alert(
      "Order Details: " +
      "\n" +
      "Fullname: " +
      this.state.fullname +
      "\n" +
      "Address: " +
      this.state.address +
      "\n" +
      "Phone: " +
      this.state.phone +
      "\n" +
      "Food: " +
      this.state.pizza_quantity +
      " " +
      this.state.pizza_size +
      " " +
      this.state.picked_pizza +
      "\n" +
      this.state.sandwich_quantity +
      " " +
      this.state.picked_sandwich +
      "\n" +
      this.state.drink_quantity +
      " " +
      this.state.drink_size +
      " " +
      this.state.picked_drink +
      "\n" +
      "Total Cost: " +
      totalCost.toFixed(2) +
      "$\n"
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.checkOrder}>
        <header>
          <h1>City Delicatessen</h1>
        </header>
        <fieldset>
          <legend>
            <h2>Contact Details</h2>
          </legend>
          <table class="center">
            <tr>
              <td>
                <label for="fullname">Full Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="fullname"
                  size="35"
                  pattern="[A-Za-z\s]+"
                  placeholder="Enter your first and last name here"
                  //required
                  value={this.state.fullname}
                  onChange={this.handleFullname}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="address">Street Address:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  size="35"
                  pattern="([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+"
                  placeholder="Enter your address here"
                  //required
                  value={this.state.address}
                  onChange={this.handleAddress}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="phone">Telephone Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  name="phone"
                  placeholder="000-000-0000"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  //required
                  value={this.state.phone}
                  onChange={this.handlePhone}
                />
              </td>
            </tr>
          </table>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Pizza Choices</h2>
          </legend>
          <table>
            <tr>
              <td class=" center">
                <figure>
                  <img
                    src="https://images.contentstack.io/v3/assets/blt068dbc54bf4fc7ed/bltf70df0a3f7b98d04/5db5c829e9effa6ba52972ea/Triple_Cheese_Pizza_v2.jpg"
                    height=" 75px"
                    width="75px"
                    alt="Cheese pizza"
                  />
                  <figcaption>
                    <input
                      type="radio"
                      name="pizzatype"
                      value="Super Cheesy"
                      checked={this.state.picked_pizza === "Super Cheesy"}
                      onChange={this.handlePickedPizza}
                    />Super Cheesy
              </figcaption>
                </figure>
              </td>
              <td class="center">
                <figure>
                  <img
                    src="https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-6.jpg"
                    height="75px"
                    width="75px"
                    alt="Extra meaty pizza"
                  />
                  <figcaption>
                    <input
                      type="radio"
                      name="pizzatype"
                      value="Extra Meaty"
                      checked={this.state.picked_pizza === "Extra Meaty"}
                      onChange={this.handlePickedPizza}
                    />Extra Meaty
              </figcaption>
                </figure>
              </td>
              <td class="center">
                <figure>
                  <img
                    src="https://usercontent2.hubstatic.com/14685585.jpg"
                    height=" 75px"
                    width="75px"
                    alt="Cheese pizza"
                  />
                  <figcaption>
                    <input
                      type="radio"
                      name="pizzatype"
                      value="Really Veggy"
                      checked={this.state.picked_pizza === "Really Veggy"}
                      onChange={this.handlePickedPizza}
                    />Really Veggy
              </figcaption>
                </figure>
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <td>
                <input
                  type="radio"
                  name="pizzasize"
                  value="Small"
                  checked={this.state.pizza_size === "Small"}
                  onChange={this.handlePizzaSize}
                />Small $8.50
                <input
                  type="radio"
                  name="pizzasize"
                  value="Medium"
                  checked={this.state.pizza_size === "Medium"}
                  onChange={this.handlePizzaSize}
                />Medium $11.50
                <input
                  type="radio"
                  name="pizzasize"
                  value="Large"
                  checked={this.state.pizza_size === "Large"}
                  onChange={this.handlePizzaSize}
                />Large $14.00
                <input
                  type="radio"
                  name="pizzasize"
                  value="Extra Large"
                  checked={this.state.pizza_size === "Extra Large"}
                  onChange={this.handlePizzaSize}
                />Extra Large $16.50
              </td>
            </tr>
            <tr>
              <td>
                <label for="pizzaquantity">Quantity:</label>
                <input
                  type="number"
                  name="pizzaquantity"
                  min="0"
                  value={this.state.pizza_quantity}
                  onChange={this.handlePizzaQuantity}
                />
              </td>
            </tr>
          </table>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Sandwich Choices (Choose one only one of these)</h2>
          </legend>
          <table>
            <table>
              <tr>
                <td class="center">
                  <figure>
                    <img
                      src="https://www.thegardengrazer.com/wp-content/uploads/2017/05/avo-sandwich.png"
                      height=" 75px"
                      width="75px"
                      alt="All garden vegetarian sandwich"
                    />
                    <figcaption>
                      <input
                        type="radio"
                        name="sandwich"
                        value="All Garden Vegetarian"
                        checked={this.state.picked_sandwich === "All Garden Vegetarian"}
                        onChange={this.handlePickedSandwich}
                      />All Garden Vegetarian $7.50
                </figcaption>
                  </figure>
                </td>
                <td class="center">
                  <figure>
                    <img
                      src="https://www.365daysofcrockpot.com/wp-content/uploads/2019/04/BBQ-Beef-Sandwiches.jpg"
                      height=" 75px"
                      width="75px"
                      alt="Big beef on a bun"
                    />
                    <figcaption>
                      <input
                        type="radio"
                        name="sandwich"
                        value="Big Beef on a Bun"
                        checked={this.state.picked_sandwich === "Big Beef on a Bun"}
                        onChange={this.handlePickedSandwich}
                      />Big Beef on a Bun $8.50
                </figcaption>
                  </figure>
                </td>
              </tr>
              <tr>
                <td class="center">
                  <figure>
                    <img
                      src="https://assets.epicurious.com/photos/5620ffcf219057901cc67b64/master/pass/364812_grilled-cuban-sandwich_1x1.jpg"
                      height=" 75px"
                      width="75px"
                      alt="Mixed grill sandwich"
                    />
                    <figcaption>
                      <input
                        type="radio"
                        name="sandwich"
                        value="Mixed Grill"
                        checked={this.state.picked_sandwich === "Mixed Grill"}
                        onChange={this.handlePickedSandwich}
                      />Mixed Grill $9.50
                </figcaption>
                  </figure>
                </td>
                <td class="center">
                  <figure>
                    <img
                      src="https://www.thespruceeats.com/thmb/7mSTJ8amwWy1D-UFlciNuMLfv7Y=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/pulled-pork-and-slaw-on-plate-18-56a8b9625f9b58b7d0f49e73.jpg"
                      height=" 75px"
                      width="75px"
                      alt="Grilled pork sandwich"
                    />
                    <figcaption>
                      <input
                        type="radio"
                        name="sandwich"
                        value="Grilled Pork"
                        checked={this.state.picked_sandwich === "Grilled Pork"}
                        onChange={this.handlePickedSandwich}
                      />Grilled Pork $9.50
                </figcaption>
                  </figure>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td>
                  <label for="sandwichquantity">Quantity:</label>
                  <input
                    type="number"
                    name="sandwichquantity"
                    id="sandwichquantity"
                    min="0"
                    value={this.state.sandwich_quantity}
                    onChange={this.handleSandwichQuantity}
                  />
                </td>
              </tr>
            </table>
          </table>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Drink Choices</h2>
          </legend>
          <table>
            <tr>
              <td>
                <input
                  type="radio"
                  name="drink"
                  value="Cola"
                  checked={this.state.picked_drink === "Cola"}
                  onChange={this.handlePickedDrink}
                />Cola
            <input
                  type="radio"
                  name="drink"
                  value="Orange"
                  checked={this.state.picked_drink === "Orange"}
                  onChange={this.handlePickedDrink}
                />Orange
            <input
                  type="radio"
                  name="drink"
                  value="Lemon"
                  checked={this.state.picked_drink === "Lemon"}
                  onChange={this.handlePickedDrink}
                />Lemon
            <input
                  type="radio"
                  name="drink"
                  value="Rootbeer"
                  checked={this.state.picked_drink === "Rootbeer"}
                  onChange={this.handlePickedDrink}
                />Root Beer
          </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name="drinksize"
                  value="Small"
                  checked={this.state.drink_size === "Small"}
                  onChange={this.handleDrinkSize}
                />Small $1.25
            <input
                  type="radio"
                  name="drinksize"
                  value="Medium"
                  checked={this.state.drink_size === "Medium"}
                  onChange={this.handleDrinkSize}
                />Medium $1.75
            <input
                  type="radio"
                  name="drinksize"
                  value="Large"
                  checked={this.state.drink_size === "Large"}
                  onChange={this.handleDrinkSize}
                />Large $2.00
          </td>
            </tr>
            <tr>
              <td>
                <label for="drinkquantity">Quantity:</label>
                <input
                  type="number"
                  name="drinkquantity"
                  id="drinkquantity"
                  min="0"
                  value={this.state.drink_quantity}
                  onChange={this.handleDrinkQuantity}
                />
              </td>
            </tr>
          </table>
        </fieldset>
        <div class="spacing">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <OrderForm />,
  document.getElementById('root')
);
