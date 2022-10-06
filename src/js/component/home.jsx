import React, { useEffect } from "react";


const Home = () => {
	const [list, setList] = useState([])

	useEffect(() => {}, [])
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Janeshka")
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log(error))
}, []

const addTask = (myTask) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/Janeshka",{
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(myTask),
		redirect: 'follow'
	})
	.then(response => response.json())
	.then(result => getComputedStyle.list())
	.catch(error => console.log(error))
}

	return (
		<div className="text-center">
			{list.map((task, i) => {
				return(
					<p key={i}>{task.label}</p>
				)
		}
			<button className="btn btn-primary"
			onClick={() => addTask({label: 'eat' , done: false})}>add</button>
		</div>
	);
};

export default Home;
