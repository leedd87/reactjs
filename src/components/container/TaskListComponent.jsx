import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

const TaskListComponent = () => {
	const defaultTask = new Task(
		"Example",
		"Default description",
		true,
		LEVELS.NORMAL
	);
	const [tasks, setTasks] = useState([defaultTask]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Task state has been modified");
		setLoading(false);

		return () => {
			console.log("TaskList component is going to unmount");
		};
	}, [tasks]);

	const changeCompleted = (id) => {
		console.log("TODO: Cambiar estado de una tarea");
	};

	return (
		<div>
			<div className="col-12">
				<div>
					<div class="card">
						<div class="card-header p-3">
							<h5 class="card-title">Your Tasks:</h5>
						</div>
						<div
							className="card-body"
							style={{ position: "relative", height: "400px" }}
						>
							<table>
								<thead>
									<tr>
										<th scope="col">Title</th>
										<th scope="col">Description</th>
										<th scope="col">Priority</th>
										<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{/*TODOS: Acplicar un For/Map para rendrizar una lista */}
									<TaskComponent task={defaultTask}></TaskComponent>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskListComponent;
