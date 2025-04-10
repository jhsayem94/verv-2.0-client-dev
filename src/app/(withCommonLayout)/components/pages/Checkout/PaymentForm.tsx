/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreatePaymentIntent } from "@/hooks/payment.hook";
import { TPaymentProps } from "@/types";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const PaymentForm = ({ amount, planId, userData }: TPaymentProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { mutateAsync: createPaymentIntent } = useCreatePaymentIntent();

  useEffect(() => {
    console.log("amount", amount);
    if (amount > 0) {
      (async () => {
        try {
          const data = await createPaymentIntent(amount);
          setClientSecret(data);
        } catch (error: any) {
          console.error("Error creating payment intent:", error.message);
        }
      })();
    }
  }, [amount, createPaymentIntent]);

  console.log("client secret", clientSecret);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardNumberElement);

    console.log("card", card);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message || ""); // Handle undefined case
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: userData.email,
            name: userData.fullName,
            phone: userData.phoneNumber,
          },
        },
      });

    // console.log("payment intent", paymentIntent);
    // console.log("confirm error", confirmError);

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        // const payment = {
        //     email: user.email,
        //     price: totalPrice,
        //     transactionId: paymentIntent.id,
        //     date: new Date(), // utc date convert. use moment js to
        //     cartIds: cart.map(item => item._id),
        //     menuItemIds: cart.map(item => item.menuId),
        //     status: 'pending'
        // }

        // const res = await axiosSecure.post('/payments', payment);
        // console.log('payment saved', res.data);
        // refetch();
        // if (res.data?.paymentResult?.insertedId) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "Thank you for the taka paisa",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     navigate('/dashboard/paymentHistory')
        // }
      }
    }
  };

  return (
    <div>
      <h2>This is payment form {amount}</h2>
      <div className="relative px-4 max-w-lg mx-auto">
        <div className="bg-white px-8 py-6 rounded-lg shadow-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* card number */}
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <CardNumberElement
                id="card-number"
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-2"
              />
            </div>
            {/* card expiry */}
            <div>
              <label
                htmlFor="card-expiry"
                className="block text-sm font-medium text-gray-700"
              >
                Card Expiry
              </label>
              <CardExpiryElement
                id="card-expiry"
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-2"
              />
            </div>
            {/* card cvc */}
            <div>
              <label
                htmlFor="card-cvc"
                className="block text-sm font-medium text-gray-700"
              >
                Card CVC
              </label>
              <CardCvcElement
                id="card-cvc"
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-2"
              />
            </div>
            {/* card holder name */}
            <div>
              <label
                htmlFor="card-holder-name"
                className="block text-sm font-medium text-gray-700"
              >
                Card Holder Name
              </label>
              <input
                type="text"
                id="card-holder-name"
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* postal code */}
            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postal-code"
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-2 w-full"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            {/* submit button */}
            <button
              type="submit"
              disabled={!stripe || !clientSecret}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Pay Now
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && (
              <p className="text-green-600">
                {" "}
                Your transaction id: {transactionId}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
