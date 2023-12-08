import Image from 'next/image'
import { FC, LegacyRef, MouseEvent, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FieldError } from 'react-hook-form'

import trashIcon from '@/assets/images/trash.svg'

import styles from './InputFile.module.scss'

interface IInputFile {
	fieldValue: File[]
	onChange: any
	inputRef: LegacyRef<HTMLInputElement> | undefined
	error: FieldError | undefined
}

const InputFile: FC<IInputFile> = ({
	inputRef,
	onChange,
	fieldValue,
	error,
}) => {
	const [files, setFiles] = useState<File[]>(fieldValue)
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles?.length) {
			setFiles(prevFiles => {
				const mutate: File[] = [...prevFiles, ...acceptedFiles]
				if (mutate.length > 2) {
					return [...prevFiles]
				} else {
					onChange(mutate)
					return mutate
				}
			})
		}
	}, [])

	const removeFile = (e: MouseEvent<HTMLElement>, name: string) => {
		e.preventDefault()
		setFiles(files => {
			const filter = files.filter(file => file.name !== name)
			onChange(filter)
			return filter
		})
	}

	const { getInputProps, getRootProps } = useDropzone({
		onDrop,
		accept: {
			'application/pdf': ['.pdf'],
			'application/msword': ['.doc'],
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
				['.docx'],
		},
		maxFiles: 2,
		maxSize: 5 * 1024 * 1024,
		multiple: true,
	})
	return (
		<div className={styles.wrapper}>
			<div {...getRootProps()}>
				<input {...getInputProps()} ref={inputRef} />
				<span className={styles.button}>прикрепить файл</span>
			</div>
			<ul className={styles.ul}>
				{fieldValue?.map(file => (
					<li key={file.name}>
						<span>{file.name}</span>
						<button
							onClick={e => removeFile(e, file.name)}
							className={styles.delete}
						>
							<Image src={trashIcon} alt='Удалить' fill />
						</button>
					</li>
				))}
			</ul>
			{error && <span className={styles.error}>{error.message}</span>}
		</div>
	)
}

export default InputFile
