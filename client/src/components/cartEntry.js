import React from 'react';
import {connect} from 'react-redux';
import '../styles.css';

import {removeItem, quantityChange} from '../actions/itemsChange';
import {changeTotal} from '../actions/totalChange';

class CartEntry extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }


    removeItem () {
        this.props.dispatch(removeItem(this.props.id));
        this.props.dispatch(changeTotal('dec', this.props.item.quantity * this.props.item.price))
    }

    decreaseQuantity () {
        if (this.props.item.quantity === 0) {
            return;
        } else {
            this.props.dispatch(quantityChange('dec', this.props.id));
            this.props.dispatch(changeTotal('dec', this.props.item.price));
        }
    }

    increaseQuantity () {
        if (this.props.item.quantity >= this.props.item.available) {
            alert('There is no more of this item available');
            return;
        } else {
            this.props.dispatch(quantityChange('inc', this.props.id));
            this.props.dispatch(changeTotal('inc', this.props.item.price));
        }
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
                    <div className="cart-entry-quantity--" onClick={this.decreaseQuantity}>-</div>
                    <div className="cart-entry-quantity-quan">{this.props.item.quantity}</div>
                    <div className="cart-entry-quantity-plus" onClick={this.increaseQuantity}>+</div>
                    <div className="cart-entry-remove" onClick={this.removeItem} >remove</div>
                </div>
                <div className="cart-entry-total-price">${ Math.round((this.props.item.price * this.props.item.quantity) * 100)/100} total</div>
            </div>
        )
    }
}

export default connect((state) => {
    return {};
})(CartEntry)