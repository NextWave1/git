import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/components/ui/form/Field'
import PhoneInput from '@/components/ui/form/PhoneInput'
import Checkbox from '@/components/ui/form/checkbox/Checkbox'
import SubHeading from '@/components/ui/headings/SubHeading'

import closeImg from '@/assets/images/close.svg'

import { validTel } from '@/utils/regex'

import styles from './Form.module.scss'
import { bgVariants, formVariants } from './form.animation'

interface IFormData {
	name: string
	tel: string
	date: string
	time: string
	message: string
	userAgreement: boolean
}

const Form: FC<{
	close: Dispatch<SetStateAction<boolean>>
}> = ({ close }) => {
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
		<motion.div
			className={styles.bg}
			variants={bgVariants}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<motion.div variants={formVariants} className={styles.wrapper}>
				<Scrollbars className={styles.modal}>
					<button onClick={() => close(false)} className={styles.close}>
						<Image src={closeImg} alt='Закрыть' width={30} height={30} />
					</button>
					<SubHeading title='Запрос на экскурсию по строящимся объектам' />
					<span>Строительство домов любой сложности!</span>

					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
							{...register('date', {
								required: 'Это поле является обязательным.',
							})}
							span='дата'
							placeholder='__.__'
							error={errors.date}
						/>
						<Field
							{...register('time', {
								required: 'Это поле является обязательным.',
							})}
							span='желаемое время'
							placeholder='__.__'
							error={errors.time}
						/>
						<Field
							{...register('message', {
								required: 'Это поле является обязательным.',
							})}
							span='сообщение'
							placeholder='Ваше сообщение...'
							textarea
							error={errors.message}
						/>
						<Checkbox
							{...register('userAgreement', {
								validate: value => {
									return (
										value === true ||
										'Примите условия пользовательского соглашения.'
									)
								},
							})}
							span='я принимаю условия '
							error={errors.userAgreement}
							valueCheckbox={getValues('userAgreement')}
						/>
						<button type='submit'>отправить</button>
					</form>
				</Scrollbars>
			</motion.div>
		</motion.div>
	)
}

export default Form
