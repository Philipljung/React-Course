import { Header } from '../components/Header';
import { Link } from 'react-router';
import "./Tracking.css";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

export function Tracking ({ cart }) {
    const { orderId, productId } = useParams();
    const [ order, setOrder ] = useState(null);

    useEffect(() => {
        const fetchTrackingData = async () => {
        const response = await axios.get(`/api/orders/${orderId}?expand=products`);
        setOrder(response.data);
        }

        fetchTrackingData();
    }, [orderId]);


    if (!order) {
        return null;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });


    return (
        <>
            <Header cart={cart} />
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}  
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.product.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}