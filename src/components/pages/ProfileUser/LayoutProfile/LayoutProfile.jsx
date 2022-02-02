import { Outlet } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../../context/UserContext';
import HeaderProfile from '../../../molecules/HeaderProfile/HeaderProfile';
import UserInfo from '../../../molecules/UserInfo/UserInfo';

const LayoutProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <HeaderProfile username={user.username} enableLogOut={true} />
            <UserInfo color={user.color} photo={user.photo} username={user.username} enableTab={true} />
            <Outlet />  {/* Renderiza la ruta hija que se encuentre activa */}
        </div>
    )
}

export default LayoutProfile;