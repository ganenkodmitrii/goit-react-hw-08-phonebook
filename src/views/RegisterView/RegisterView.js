import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { getErrorRegister } from '../../redux/auth/auth-selectors';

import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Toast from 'react-bootstrap/Toast';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector(getErrorRegister);
    console.log(error);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div style={{ width: '350px', margin: 'auto', marginTop: '10px' }}>
            <Typography variant="h5">Create your account</Typography>
            {error && (
                <Toast
                    style={{
                        position: 'absolute',
                        top: 100,
                        right: 110,
                    }}
                >
                    <Toast.Body>{error}</Toast.Body>
                </Toast>
            )}
            <Form onSubmit={handleSubmit} autoComplete="on">
                <Form.Group controlId="formBasicText">
                    <Form.Label>
                        Username <span style={{ color: '#E30707' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email address{' '}
                        <span style={{ color: '#E30707' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password <span style={{ color: '#E30707' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create account
                </Button>
            </Form>
        </div>
    );
}
