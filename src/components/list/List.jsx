import { Item } from '../item/Item';
import { Reorder } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, setTasks } from '../../actions';
import { selectLoadingStatus, selectSearchingStatus, selectTasks } from '../../selectors';
import { useEffect } from 'react';

export const List = () => {
	const dispatch = useDispatch();

	const tasks = useSelector(selectTasks);
	const isLoading = useSelector(selectLoadingStatus);
	const isSearching = useSelector(selectSearchingStatus);

	const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
	const isNothing = !isLoading && !tasks.length;

	const reorderHandler = (tasks) => dispatch(setTasks(tasks));

	useEffect(() => dispatch(getTasks()), []);

	return (
		<>
			<Reorder.Group className={`tasks-list ${loadingClass}`} as='ul' values={tasks} onReorder={reorderHandler}>
				{tasks.map((task) => (
					<Item task={task} key={task.id} />
				))}
			</Reorder.Group>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
