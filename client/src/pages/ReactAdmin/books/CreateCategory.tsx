import { useCreateSuggestionContext, useDataProvider, useNotify } from 'react-admin'
import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'

type CategoryTypeInterface = {
	categoryType: 'books' | 'textbooks' | 'stationery'
}

const CreateCategory = ({ categoryType }: CategoryTypeInterface) => {
	const { onCancel, onCreate } = useCreateSuggestionContext()
	const [value, setValue] = useState('')
	const dataProvider = useDataProvider()
	const notify = useNotify()

	const handleSubmit = async () => {
		try {
			const response = await dataProvider.create(`categories/${categoryType}`, {
				data: { name: value },
			})

			console.log(response.data)
			// categories.push(response.data)
			onCreate(value)
			setValue('')
			notify('Усшено добавихте нова категория', { type: 'success' })
		} catch (error) {
			console.error(error)
			notify('Грешка при създаване на категория', { type: 'error' })
		}
	}

	return (
		<Dialog open onClose={onCancel}>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<TextField
						label='Име на категория'
						value={value}
						onChange={(event) => setValue(event.target.value)}
						autoFocus
					/>
				</DialogContent>
				<DialogActions>
					<Button type='submit'>Save</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
}

export default CreateCategory
