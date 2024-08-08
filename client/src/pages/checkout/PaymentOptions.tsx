import { BankTransfer } from './Banktransfer'
import { BillingAddress } from './BillingAdress'
import { CashOnDelivery } from './CashOnDelivery'
import { DiscountCode } from './DiscountCode'
import { EasyPayEpay } from './EasyPayEpay'
import { Faktura } from './Faktura'
import { VisaMasterCard } from './VisaMasterCard'

type PaymentOptionsProps = {
	onChange: (method: string) => void
}

const PaymentOptions = ({ onChange }: PaymentOptionsProps) => {
	return (
		<li id='payment' role='presentation' className='checkout-payment-method fc-size-l'>
			<div
				id='checkout-step-payment'
				className='step-content'
				data-role='content'
				role='tabpanel'
				aria-hidden='false'
			>
				<h5> Информация за плащане</h5>
				<form id='co-payment-form' className='form payments' noValidate={true}>
					<input type='hidden' name='form_key' value='HCSMjIwtfKBQbuWI' />
					<fieldset className='fieldset' />
					<legend className='legend'>
						<span>Информация за плащане</span>
					</legend>

					<input
						name='captcha_form_id'
						type='hidden'
						value='payment_processing_request'
						data-scope=''
					/>

					<Faktura />

					<div id='checkout-payment-method-load' className='opc-payment'>
						<div className='items payment-methods'>
							<div className='payment-group' data-repeat-index='0'>
								<div className='step-title' data-role='title'>
									Метод на плащане
								</div>

								<CashOnDelivery />

								<BankTransfer />

								<EasyPayEpay />

								<VisaMasterCard />
							</div>
						</div>
					</div>
					<div className='no-quotes-block' style={{ display: 'none' }}>
						<span>Няма възможни методи за плащане.</span>
					</div>

					<BillingAddress />

					<DiscountCode />
				</form>
			</div>
		</li>
	)
}

export default PaymentOptions
