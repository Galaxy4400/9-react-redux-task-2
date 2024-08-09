import { updateTask as updateTaskApi } from "../api/tasks-api";
import { getTasks } from "./get-tasks";

export const updateTask = (taskId, updatingData) => {
	return (dispatch) => {
		updateTaskApi(taskId, updatingData)
			.then(() => dispatch(getTasks()));
	};
};
