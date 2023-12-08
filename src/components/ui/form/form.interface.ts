import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface IFieldProps {
	span: string
	textarea?: boolean
	error?: FieldError | undefined
}

interface ICheckBoxProps {
	valueCheckbox: boolean
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps &
	TextareaHTMLAttributes<HTMLTextAreaElement>

export interface IField extends TypeInputPropsField {}

type TypeCheckboxField = IField & ICheckBoxProps

export interface ICheckBox extends TypeCheckboxField {
	whiteMark?: boolean
}
