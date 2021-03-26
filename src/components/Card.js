import cardchip from "./icons8-chip-card-40.png";
import "./Card.css";

const Card = (props) => {
  // destructure: replace (props) with ({props.cardInfo}), then rest be {cardlogo} etc directly
  const isFlipped = props.isFlipped ? "isFlipped" : "";

  return (
    <div className='card-container'>
      <div className={`card ${isFlipped}`}>
        <div className='card--front'>
          <div className='card__static'>
            <div className='card__chip'>
              <img src={cardchip} alt='cardchip' />
            </div>
            <div className='card__logo'>{props.cardInfo.cardlogo}</div>
          </div>
          <div className='card__number'>{props.cardInfo.cardnumber}</div>
          <div className='card__info'>
            <div className='card__holder'>
              <label>Card Holder</label>
              <div className='card__holder--text'>
                {props.cardInfo.cardname}
              </div>
            </div>
            <div className='card__expiration'>
              <label className='card__expiration--desc'>Expires</label>
              <div className='card__expiration--detail'>
                <div className='card__expiration--detail__m'>
                  {props.cardInfo.expirationmonth}
                </div>
                /
                <div className='card__expiration--detail__y'>
                  {props.cardInfo.expirationyear}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card--back'>
          <div className='card__stripe'></div>
          <div className='card__cvv'>
            <label className='card__cvv--desc'>CVV</label>
            <div className='card__cvv--num'>{props.cardInfo.cvv}</div>
            <div className='card__cvv--logo'>{props.cardInfo.cardlogo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
