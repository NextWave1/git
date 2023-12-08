import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { validTel } from '@/utils/regex'

import Field from '../../form/Field'
import PhoneInput from '../../form/PhoneInput'
import Checkbox from '../../form/checkbox/Checkbox'

import styles from './Form.module.scss'

interface IFormData {
	name: string
	tel: string
	comment: string
	userAgreement: boolean
}

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm<IFormData>({
		mode: 'all',
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
		console.table(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...register('name', {
					required: 'Это поле является обязательным.',
				})}
				span='имя'
				placeholder='Имя'
				error={errors.name}
			/>
			<PhoneInput
				{...register('tel', {
					required: 'Телефон является обязательным',
					pattern: {
						value: validTel,
						message: 'Введите корректный номер телефона.',
					},
				})}
				type='tel'
				span='телефон'
				placeholder='+7 (___) ___-__-__'
				error={errors.tel}
			/>
			<Field
				{...register('comment', {
					required: 'Это поле является обязательным.',
				})}
				span='комментарий к заявке'
				placeholder='Ваш комментарий...'
				error={errors.comment}
				textarea
			/>
			<Checkbox
				{...register('userAgreement', {
					validate: value => {
						return (
							value === true || 'Примите условия пользовательского соглашения.'
						)
					},
				})}
				span='я принимаю условия '
				error={errors.userAgreement}
				valueCheckbox={getValues('userAgreement')}
				whiteMark
			/>
			<button type='submit'>отправить</button>
		</form>
	)
}

export default Form
