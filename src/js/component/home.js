import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	useEffect(() => {
		console.log({ list });
	}, [list]);

	return (
		<div className="container mt-5 text-center">
			<div className="row d-flex justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-body text-primary">
							<h1 className="display-5">To Do List</h1>
							<input
								className="form-control"
								type="text"
								value={task}
								onChange={e => {
									setTask(e.target.value.toUpperCase());
								}}
								onKeyPress={e => {
									if (e.key === "Enter") {
										if (task != "") {
											setList(
												list.concat(task.toUpperCase())
											);
											setTask("");
											//console.log({ list });
										} else {
											alert("Ingrese una actividad");
										}
									}
								}}
							/>
							{!list
								? "loading..."
								: list.map((item, index) => {
										return (
											<label
												className="form-control text-primary list-group-item list-group-item-action"
												key={index}
												onDoubleClick={() => {
													setList(
														list.filter(
															(itemf, indexf) =>
																indexf !== index
														)
													);
												}}>
												{item}
											</label>
										);
								  })}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
