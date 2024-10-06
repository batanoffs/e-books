import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

import PrivacyRulesModal from '../../../pages/register/PrivacyRulesModal'
import useAlertStore from '../../../store/alert'
import { usePrivacyModal } from '../../../store/helperModal'

import styles from './newsletter.module.scss'
import API from '../../../utils/constants/api'

type Input = {
	newsLetterEmail: string
	privacyPolicy: boolean
}

export const Newsletter = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Input>()
	const toggleOpenPrivacy = usePrivacyModal((state) => state.toggleOpen)
	const showAlert = useAlertStore((state) => state.showAlert)

	const onSubmit: SubmitHandler<Input> = async (data) => {
		const { newsLetterEmail, privacyPolicy } = data
		if (!newsLetterEmail) {
			return showAlert('Не сте въвели имейл', 'error')
		}
		if (!privacyPolicy) {
			return showAlert('Моля приемете условията и политиката за поверителност', 'error')
		}

		const response = await axios.post(API.NEWSLETTER, { newsLetterEmail })

		if (response.status === 200) {
			showAlert(response.data, 'success')
		} else {
			showAlert(response.data, 'error')
		}
	}

	return (
		<div className={styles.container}>
			<PrivacyRulesModal />

			<div className={styles.newsletterImageBlock}>
				<img src='/postoffice.png' alt='promo image' loading='lazy' width='335' />
			</div>

			<div>
				<h2>Запиши се за бюлетина ни</h2>
				<div>
					<form
						className={styles.newsletterForm}
						onSubmit={handleSubmit(onSubmit)}
						method='post'
					>
						<div className={styles.inputButtonWrapper}>
							<div className={styles.newsletterInputCont}>
								<input
									type='email'
									placeholder='Твоят имейл адрес'
									id='newsLetterEmail'
									{...register('newsLetterEmail', { required: true })}
								/>

								<button type='submit'>
									Запиши ме <span className={styles.spinner}></span>
								</button>
							</div>
							{(errors.newsLetterEmail || errors.privacyPolicy) && (
								<span className={styles.error}>
									Невалиден имейл или неприети условия
								</span>
							)}
						</div>
						<div className={styles.newsletterFormBlock}>
							<input
								type='checkbox'
								id='privacyPolicy'
								className={styles.checkRadioCheck}
								{...register('privacyPolicy', { required: true })}
							/>
							<label
								className={`${styles.checkRadio} ${styles.termsLabel}`}
								htmlFor='privacyPolicy'
							>
								<span className={styles.checkRadioElement}>
									<span style={{ color: 'red' }}>*</span>
									Съгласен съм с
								</span>
								<a onClick={toggleOpenPrivacy} className={styles.privacyPolicy}>
									Политика за обработка на лични данни.
								</a>
							</label>
						</div>
					</form>
					<div className={styles.newsletterMessage}>
						<h6 className={styles.newsletterMessageLabel}>
							Благодарим Ви, че се записахте за бюлетина ни.
						</h6>
					</div>
				</div>
			</div>
		</div>
	)
}
