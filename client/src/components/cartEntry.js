import React from 'react';
import '../styles.css';

class CartEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div className="cart-entry" >
                <div className="cart-entry-index" >{this.props.index+1}.</div>
                <a href={this.props.item.url}>
                    <div className="cart-entry-manufacturer" >{this.props.item.manufacturer}</div>
                    <div className="cart-entry-product-name" >{this.props.item.productName}</div>
                </a>
                <br/>
                <img className="cart-entry-image" src={this.props.item.image} />
                <div className="cart-entry-description" >{this.props.item.description} </div>
                <div className="cart-entry-price">${this.props.item.price} each</div>
                <div className="cart-entry-quantity">
                    <div className="cart-entry-quantity--">-</div>
                    <div className="cart-entry-quantity-quan">{this.props.item.quantity}</div>
                    <div className="cart-entry-quantity-plus">+</div>
                </div>
                <div className="cart-entry-total-price">${this.props.item.price * this.props.item.quantity} total</div>
            </div>
        )
    }
}

export default CartEntry