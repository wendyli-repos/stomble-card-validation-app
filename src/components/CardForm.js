import React from "react";
import "./CardForm.css";
import Dropdown from "../common/Dropdown";

const CardForm = (props) => {
  const monthoptions = [
    {
      label: "Month",
      value: "00",
    },
    {
      label: "01",
      value: "01",
    },
    {
      label: "02",
      value: "02",
    },
    {
      label: "03",
      value: "03",
    },
    {
      label: "04",
      value: "04",
    },
    {
      label: "05",
      value: "05",
    },
    {
      label: "06",
      value: "06",
    },
    {
      label: "07",
      value: "07",
    },
    {
      label: "08",
      value: "08",
    },
    {
      label: "09",
      value: "09",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];

  const yearoptions = [
    {
      label: "Year",
      value: "00",
    },
    {
      label: "21",
      value: "21",
    },
    {
      label: "22",
      value: "22",
    },
    {
      label: "23",
      value: "23",
    },
    {
      label: "24",
      value: "24",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "26",
      value: "26",
    },
    {
      label: "27",
      value: "27",
    },
    {
      label: "28",
      value: "28",
    },
    {
      label: "29",
      value: "29",
    },
    {
      label: "30",
      value: "30",
    },
    {
      label: "31",
      value: "31",
    },
  ];

  return (
    <div className='card-form-container'>
      <form className='ui form' onSubmit={props.onFormSubmit}>
        <div className='field'>
          <label htmlFor='cardnumber'>Card Number</label>
          <input
            autoFocus
            type='text'
            name='cardnumber'
            maxLength='16'
            placeholder={props.cardInfo.cardnumber}
            id='cardnumber'
            onChange={props.onChange}
          ></input>
          {props.errors.cardnumber && (
            <div className='ui negative message'>
              <p>{props.errors.cardnumber}</p>
            </div>
          )}
        </div>
        <div className='field'>
          <label htmlFor='cardname'>Card Name</label>
          <input
            type='text'
            name='cardname'
            placeholder={props.cardInfo.cardname}
            id='cardname'
            onChange={props.onChange}
          ></input>
          {props.errors.cardname && (
            <div className='ui negative message'>
              <p>{props.errors.cardname}</p>
            </div>
          )}
        </div>
        <div className='fields'>
          <div className='eight wide field'>
            <label>Expiration Date</label>
            {props.errors.expirationmonth && (
              <div className='ui negative message'>
                <p>{props.errors.expirationmonth}</p>
              </div>
            )}
            <div className='two fields'>
              <Dropdown
                options={monthoptions}
                name='expirationmonth'
                onChange={props.onChange}
              />
              <Dropdown
                options={yearoptions}
                name='expirationyear'
                onChange={props.onChange}
              />
            </div>
          </div>
          <div className='four wide field'>
            <label htmlFor='cvv'>CVV</label>
            {props.errors.cvv && (
              <div className='ui negative message'>
                <p>{props.errors.cvv}</p>
              </div>
            )}
            <input
              type='text'
              name='cvv'
              id='cvv'
              maxLength='3'
              placeholder={props.cardInfo.cvv}
              onMouseOver={props.onCVVFocus}
              onMouseOut={props.onCVVFocus}
              onChange={props.onChange}
            ></input>
          </div>
        </div>
        <button className='ui button'>Submit</button>
      </form>
    </div>
  );
};

export default CardForm;
