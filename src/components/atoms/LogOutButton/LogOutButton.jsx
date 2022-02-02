import './logout-btn.scss';
import { ReactComponent as IconLogout } from '../../../assets/images/icon-logout.svg';
import useAuth from '../../../hooks/useAuth';

const LogOutButton = () => {
    const {logOut} = useAuth();

    return (
        <button onClick={logOut}
            className='btn-logout flex-between-center font-press-2p'>
            LOGOUT
            <IconLogout />
        </button>
    )
}

export default LogOutButton;