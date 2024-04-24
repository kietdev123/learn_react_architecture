import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from '../../store/todo/todo.store';
import { toast } from 'react-toastify';

const TodoPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const todos = useSelector(state => state.todo.value)
    const dispatch = useDispatch()

    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onSavePostClicked = () => {
        if (email && password) {
            dispatch(
                addTodo({
                    id: nanoid(),
                    email,
                    password
                })
            )

            setEmail('')
            setPassword('')
        }
        else {
            toast.error('Email/Password rỗng')
        }
    }

    return (
        <div className='container pt-5'>

            <div className='container py-2'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email}
                            onChange={onEmailChanged} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password}
                            onChange={onPasswordChanged} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary"  onClick={onSavePostClicked}>
                        Submit
                    </Button>
                </Form>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                     
                        <th>ID</th>
                        <th>Email</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.id}</td>
                                <td>{listValue.email}</td>
                                <td>{listValue.password}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>
        </div>)
}

export default TodoPage;