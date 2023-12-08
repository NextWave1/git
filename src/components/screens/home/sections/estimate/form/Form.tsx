import { motion } from 'framer-motion'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/components/ui/form/Field'
import PhoneInput from '@/components/ui/form/PhoneInput'
import Checkbox from '@/components/ui/form/checkbox/Checkbox'
import { fieldAnimation } from '@/components/ui/form/field.animation'
import InputFile from '@/components/ui/form/file/InputFile'

import { validTel } from '@/utils/regex'

import styles from './Form.module.scss'
import { formAnimation } from './form.animation'

interface IFormData {
	tel: string
	message: string
	userAgreement: boolean
	files: File[]
}

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		control,
		getValues,
	} = useForm<IFormData>({
		mode: 'all',
		defaultValues: {
			files: [],
		},
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
		console.table(data)
	}
	return (
		<motion.form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
			variants={formAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
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
				{...register('message', {
					required: 'Это поле является обязательным.',
				})}
				span='сообщение'
				placeholder='Ваше сообщение...'
				error={errors.message}
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
			/>
			<motion.div className={styles.bottom} variants={fieldAnimation}>
				<button type='submit'>отправить</button>

				<Controller
					control={control}
					name='files'
					rules={{ required: 'Обязательно прикрепите файл.' }}
					render={({
						field: { onChange, ref, value },
						fieldState: { error },
					}) => (
						<InputFile
							inputRef={ref}
							onChange={onChange}
							fieldValue={value}
							error={error}
						/>
					)}
				/>
			</motion.div>
		</motion.form>
	)
}

export default Form
