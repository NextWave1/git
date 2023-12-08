export const fileValidation = (
	acceptedFiles: File[],
	prevFiles: File[],
	maxCount: number
) => {
	const mutate: File[] = [...prevFiles, ...acceptedFiles]
	if (mutate.length <= 2) {
	} else return
}
