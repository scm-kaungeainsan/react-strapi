import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { Row, Column } from 'react-foundation';
import './form.css';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "@reach/router"

const AddUserForm = (props: { addUser: (arg0: any) => void; }) => {
	const navigate = useNavigate();
	// const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
	// const initialFormState = { id: null, name: '', username: '',
	// formErrors: {email: '', password: ''},
	// emailValid: false,
	// passwordValid: false,
	// formValid: false
	// }
	// const [ user, setUser ] = useState(initialFormState)

	// const handleInputChange = event => {
	// 	const { name, value } = event.target

	// 	setUser({ ...user, [name]: value })
	// }

	const { register, handleSubmit, control, formState: { errors, isDirty, isValid } } = useForm();
	// const [result, setResult] = useState("");
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)
	// const onSubmit = (data) => setResult(JSON.stringify(data));
	const onSubmit = (data: any) => {
		console.log(data)
		// setUser(
		// 	{ ...user, [data.name]: data.userName });
		props.addUser(data)
		navigate("/about");
	}

	return (
		// <form
		// 	onSubmit={event => {
		// 		event.preventDefault()
		// 		if (!user.name || !user.username) return

		// 		props.addUser(user)
		// 		setUser(initialFormState)
		// 	}}
		// >
		// 	<label>Name</label>
		// 	<input type="text" name="name" value={user.name} />
		// 	<label>Username</label>
		// 	<input type="text" name="username" value={user.username} />
		// 	<button>Add new user</button>
		// </form>
		<div>
					<div className="main-pannel-marin-top"></div>
					<h2>Add User</h2>
					<div className="add-form-cover">
					<form onSubmit={handleSubmit(onSubmit)}>
			{/* 
			<Paper>
				<h2>Form Demo</h2>
				<Row>
					<TextField label={"Text Value1"} />
				</Row>
				<Row>
					<TextField label={"Text Value2"} />
				</Row>
				<Button>Submit</Button>
				<Button>Reset</Button>
			</Paper> */}
			<Paper>
				<Grid container spacing={4}>

					<Container>
						<Row>
							{/* <Column>
							<label>Name : </label>
							</Column>
							<Column>
							<input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="name..." />
							</Column> */}
							<label>Name : </label>
							<input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="name..." />
						</Row>
						<Row>
							<span className="error">{errors.name && "Name is required"}</span>
						</Row>
						<Row>
							<label>User Name : </label>
							<input type="text" {...register("userName", { required: true, pattern: /^[A-Za-z]+$/i })} placeholder="user name..." />
						</Row>
						<Row>
							<span className="error">{errors.userName && "UserName is required"}</span>
						</Row>
						<Row>
							<label>Age : </label>
							<input type="number" {...register("age", { required: true, min: 1, max: 99 })} />
						</Row>
						<Row>
						<span className="error">{errors.age && "Age is required"}</span>
						</Row>

						<Row>
							<label>User Role : </label>
							<select {...register("role", { required: true })}>
								<option value="">Select...</option>
								<option value="Admin">Admin</option>
								<option value="Member">Member</option>
							</select>
						</Row>
						<Row>
						<span className="error">{errors.role && "User Role is required"}</span>
						</Row>

						<Row>
							{/* <p>{result}</p> */}
						</Row>
						<br></br>
						<Row>
							{/* <input type="submit" /> */}
							{/* <Button type="submit">Submit</Button>
							<Button variant="text">Text</Button>
							<Button variant="outlined">Outlined</Button> */}
							<Button variant="contained" type="submit">Submit</Button>
						</Row>
					</Container>
				</Grid>
			</Paper>

		</form>
		</div>
		</div>
	)
}

export default AddUserForm
