import React, { Component } from "react";
import Card from "./Card";
import CardForm from "./CardForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        cardlogo: "Card Issuer",
        cardnumber: "---- ---- ---- ----",
        cardname: "",
        expirationmonth: "00",
        expirationyear: "00",
        cvv: "",
      },
      isFlipped: false,
      isBordered: false,
      errors: {},
    };
  }

  // card flip effect
  handleFocus = () => {
    this.setState((state) => ({ isFlipped: !state.isFlipped }));
  };

  // toggle borders on card based on input field
  handleBorder = () => {
    this.setState((state) => ({ isBordered: !state.isBordered }));
    console.log("borderd");
  };

  // individual field validation
  validateProperty = ({ name, value }) => {
    if (name === "cardnumber") {
      const isnum = /^\d+$/.test(value);

      if (!isnum) {
        return "Please enter numbers only.";
      } else if (value.trim().length !== 16) {
        return "Please check card number is 16 digits.";
      }
    }
    if (name === "cvv") {
      const isnum = /^\d+$/.test(value);

      if (!isnum) {
        return "Please enter numbers only.";
      } else if (value.trim().length !== 3) {
        return "Please check cvv is 3 digits.";
      }
    }
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else delete errors[e.currentTarget.name];

    const card = { ...this.state.card };
    card[e.currentTarget.name] = e.currentTarget.value;

    // check card issuer:
    // amex: /^34/; diner: /^300/; jcb: /^35/; discover: /^6011/
    if (e.currentTarget.name === "cardnumber") {
      const isMastercard = /^51/.test(e.currentTarget.value);
      const isVisa = /^4/.test(e.currentTarget.value);
      if (isMastercard) {
        card.cardlogo = "Mastercard";
      }
      if (isVisa) {
        card.cardlogo = "Visa";
      }
    }
    this.setState({ card, errors });
    // console.log(errors, card);
  };

  // entire form validation onSubmit
  validate = () => {
    const errors = {};

    const { card } = this.state;
    if (card.cardnumber.trim().length !== 16) {
      errors.cardnumber = "Card number is required.";
    }

    if (card.cardname.trim() === "") {
      errors.cardname = "Card Holder's name is required.";
    }

    if (card.cvv.trim() === "") {
      errors.cvv = "Card cvv is required.";
    }

    if (card.expirationmonth === "00" || card.expirationyear === "00") {
      errors.expirationmonth = "Expiration date is required";
    }

    // return Object.keys(errors).length === 0 ? null : errors;
    return errors;
  };

  // Update 01: can post to db.json
  postStateToJson() {
    const card = {
      cardlogo: this.state.card.cardlogo,
      cardnumber: this.state.card.cardnumber,
      cardname: this.state.card.cardname,
      expirationmonth: this.state.card.expirationmonth,
      expirationyear: this.state.card.expirationyear,
      cvv: this.state.card.cvv,
    };

    try {
      let result = fetch(" http://localhost:3001/card", {
        method: "POST",
        body: JSON.stringify(card),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  // testing card number: 1234567891234569
  // testing card name: John Doe
  // testing cvv: 123
  handleSubmit = (e) => {
    e.preventDefault();
    const card = { ...this.state.card };
    card[e.currentTarget.name] = e.currentTarget.value;

    const errors = this.validate();
    this.setState({ card, errors: errors || {} });

    // call server (json server)
    // npm run json:server
    console.log(this.state.card);
    this.postStateToJson();

    if (errors) return;
  };

  render() {
    const { card, isFlipped, errors, isBordered } = this.state;
    return (
      <React.Fragment>
        <div className='ui container'>
          <Card cardInfo={card} isFlipped={isFlipped} isBordered={isBordered} />
          <CardForm
            cardInfo={card}
            errors={errors}
            onCVVFocus={this.handleFocus}
            onFormSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onInputFocus={this.handleBorder}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
