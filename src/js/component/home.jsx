import React, { useEffect, useState} from "react";


const Home = () => {
	const [list, setList] = useState([])

	useEffect(() => {
		getList()
	}, [])

	const getList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Janeshka")
		.then(response => response.json())
	 	.then(result => setList(result))
		.catch(error => console.log(error))
	}

	const addTask = (myTask) => {
		var newList = [...list, myTask]
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Janeshka",{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newList),
			redirect: 'follow'
	})
		.then(response => response.json())
		.then(result => getList())
		.catch(error => console.log(error))
}

const deleteTask = (index) => {
    const delList = list.filter((task, i) => i != index);
    console.log(delList);
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Janeshka", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(delList),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => getList())
      .catch((error) => console.log("error", error));
  }

	return (
		<div className="text-center">
			{list.map((task, i) => {
				return(
					<p key={i}>{task.label}</p>
				)
			})}
		<h1>To Do</h1>
		<button 
			className="btn btn-success"
			onClick={() => addTask({label: 'eat', done: false})}>Add</button>
			<button 
			className="btn btn-success"
			onClick={() => deleteTask({label: 'eat', done: false})}>delete</button>
		</div>
	);
};

export default Home;
