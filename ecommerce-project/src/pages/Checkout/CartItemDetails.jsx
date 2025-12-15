import { formatMoney } from '../../utils/money';
import { useState } from 'react';
import axios from 'axios';

export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
    const [update, setUpdate] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const updateQty = async () => {
        if (update) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            });

            await loadCart();
            setUpdate(false);
        } else {
            setUpdate(true);
        }
    };

    const updateQuantityInput = (event) => {
        setQuantity(event.target.value);
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:
                        <span className="quantity-label" style={{ margin: 5 }}>
                            {update
                                ? <input
                                    value={quantity}
                                    onChange={updateQuantityInput}
                                    type="text"
                                    style={{
                                        width: 30
                                    }} />
                                : ` ${cartItem.quantity}`
                            }</span>
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={updateQty}
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}