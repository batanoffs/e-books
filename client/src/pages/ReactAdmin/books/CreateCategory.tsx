import { useCreateSuggestionContext, useDataProvider, useNotify } from 'react-admin'
import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'

type CategoryTypeInterface = {
	categoryType: 'books' | 'textbooks' | 'stationery'
}

const CreateCategory = ({ categoryType }: CategoryTypeInterface) => {
	const { filter, onCancel, onCreate } = useCreateSuggestionContext()
	const [value, setValue] = useState(filter || '')
	const dataProvider = useDataProvider()
	const notify = useNotify()

	const handleSubmit = async () => {
		try {
			await dataProvider.create(`categories/${categoryType}`, {
				data: { name: value },
			})
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
					<Button type='submit'>Запази</Button>
					<Button onClick={onCancel}>Откажи</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
}

export default CreateCategory
