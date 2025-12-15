import { CartItemDetails } from './CartItemDetails';
import { DeliveryOptions } from './DeliveryOptions';
import { DeliveryDate } from './DeliveryDate';
import axios from 'axios';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                const deleteCartItem = async () => {
                    axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCart();
                }

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate
                            selectedDeliveryOption={selectedDeliveryOption}
                        />

                        <div className="cart-item-details-grid">
                            <CartItemDetails
                                cartItem={cartItem}
                                deleteCartItem={deleteCartItem}
                                loadCart={loadCart}
                            />

                            <DeliveryOptions
                                deliveryOptions={deliveryOptions}
                                cartItem={cartItem}
                                loadCart={loadCart}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}