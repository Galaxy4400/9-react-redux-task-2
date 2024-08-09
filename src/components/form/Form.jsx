import { useState } from 'react';
import { onCreate } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { selectCreatingStatus, selectTasks } from '../../selectors';

const defaultFormState = { title: '' };

export const Form = () => {
	const dispatch = useDispatch();

	const tasks = useSelector(selectTasks);
	const isCreating = useSelector(selectCreatingStatus);

	const [formData, setFormData] = useState(defaultFormState);

	return (
		<form className="tasks-form" onSubmit={(event) => onCreate(event, tasks, formData, setFormData, defaultFormState, dispatch)}>
			<input
				className="tasks-form__input input"
				name="title"
				type="text"
				value={formData.title}
				onChange={({ target }) => setFormData({ ...formData, title: target.value })}
			/>
			<button className="tasks-form__button button" type="submit" disabled={isCreating}>Добавить новую задачу</button>
		</form>
	);
};
