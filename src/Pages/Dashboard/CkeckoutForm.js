import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CkeckoutForm = ({ data }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { price, patient, email, _id } = data;

    useEffect(() => {
        fetch('https://lit-retreat-57024.herokuapp.com/payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price: price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                } else {
                    setClientSecret('')
                }
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (confirmationError) {
            setCardError(confirmationError.message)
        } else {
            setCardError('')
            setCardSuccess('Congrats! Successfully payment done.')
            setTransectionId(paymentIntent.id)
            fetch(`https://lit-retreat-57024.herokuapp.com/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ transectionId: paymentIntent.id, amount: price })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-accent w-full block mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600 mt-5'>{cardError}</p>
            }
            {
                cardSuccess &&
                <>
                    <p className='text-green-600 mt-5'>{cardSuccess}</p>
                    <p className='text-green-600 mt-5'>Your transaction id is: <span className='text-orange-500'>{transectionId}</span></p>
                </>
            }
        </div>
    );
};

export default CkeckoutForm;