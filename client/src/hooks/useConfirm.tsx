import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ConfirmDialogProps = {
	open: boolean;
	title: string;
	content: string;
	onConfirm: () => void;
	onCancel: () => void;
};

const ConfirmDialog = ({ open, title, content, onConfirm, onCancel }: ConfirmDialogProps) => {
	return (
		<Dialog
			open={open}
			onClose={onCancel}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{content}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' onClick={onCancel}>
					Отмени
				</Button>
				<Button color="error" variant='contained' onClick={onConfirm} autoFocus>
					Потвърди
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const useConfirm = () => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [resolvePromise, setResolvePromise] = useState<(value: boolean) => void>(() => {});

	const handleCancel = useCallback(() => {
		setOpen(false);
		resolvePromise(false); // Reject the promise
	}, [resolvePromise]);

	const handleConfirm = useCallback(() => {
		setOpen(false);
		resolvePromise(true); // Resolve the promise
	}, [resolvePromise]);

	const confirm = useCallback(
		(title: string, content: string) => {
			setTitle(title);
			setContent(content);
			setOpen(true);

			// Return a promise that resolves when the user confirms or cancels
			return new Promise<boolean>((resolve) => {
				setResolvePromise(() => resolve);
			});
		},
		[]
	);

	return {
		confirm,
		open,
		title,
		content,
		handleCancel,
		handleConfirm,
		dialog: (
			<ConfirmDialog
				open={open}
				title={title}
				content={content}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		),
	};
};

export default useConfirm;
