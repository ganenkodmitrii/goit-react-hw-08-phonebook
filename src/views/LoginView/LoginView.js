import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { getErrorLogin } from '../../redux/auth/auth-selectors';
import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector(getErrorLogin);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div style={{ width: '350px', margin: 'auto', marginTop: '10px' }}>
            <Typography variant="h5">Sign in to Phonebook</Typography>

            {error && (
                <Toast
                    style={{
                        position: 'absolute',
                        top: 100,
                        right: 95,
                    }}
                >
                    <Toast.Body>{error}</Toast.Body>
                </Toast>
            )}
            <Form onSubmit={handleSubmit} autoComplete="on">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        </div>
    );
}
