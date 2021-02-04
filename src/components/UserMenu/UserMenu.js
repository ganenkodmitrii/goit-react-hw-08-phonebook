import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return (
        <div style={{ display: 'flex' }}>
            <Typography variant="h6" gutterBottom>
                Hello, {name}!
            </Typography>

            <Button
                style={{
                    marginLeft: '10px',
                    paddingBottom: '5px',
                }}
                type="button"
                variant="contained"
                color="secondary"
                onClick={() => dispatch(logOut())}
            >
                Sign out
            </Button>
        </div>
    );
}
