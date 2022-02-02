import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import { Row, Column } from 'react-foundation';
import './form.css';
import { useNavigate } from 'react-router-dom';


const LoginForm = (props: { addUser: (arg0: any) => void; }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } } = useForm();
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)
    const onSubmit = (data: any) => {
        console.log(data)
        props.addUser(data)
        navigate("/home");
    }

    return (
        <div className="login-container">
            {/* <div className="main-pannel-marin-top"></div> */}
            {/* <div className="login-container"> */}
                <h2>Login</h2>
                <div className="login-form-cover">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Paper>
                            <Grid container spacing={4}>
                                <Container>
                                    <Row>
                                        <label>User Name  </label>
                                        <input type="text" {...register("userName", { required: true})} placeholder="user name..." />
                                    </Row>
                                    <Row>
                                        <span className="error">{errors.userName && "UserName is required"}</span>
                                    </Row>
                                    <Row>
                                        <label>PassWord  </label>
                                        <input type="password" {...register("name", { required: true, minLength: 6 })} placeholder="name..." />
                                    </Row>
                                    <Row>
                                        <span className="error">{errors.name && "Name is required"}</span>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Button variant="contained" type="submit">Submit</Button>
                                    </Row>
                                </Container>
                            </Grid>
                        </Paper>

                    </form>
                </div>
            {/* </div> */}
        </div>
    )
}

export default LoginForm
