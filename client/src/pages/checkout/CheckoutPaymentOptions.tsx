type PaymentOptionsProps = {
    onChange: (method: string) => void;
};

const CheckoutPaymentOptions = ({ onChange }: PaymentOptionsProps) => {
    return (
        <div>
            <h2>Payment Options</h2>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Select Payment Method</option>
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="epay.bg">ePay.bg</option>
                <option value="easypay">EasyPay</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
        </div>
    );
};

export default CheckoutPaymentOptions;
