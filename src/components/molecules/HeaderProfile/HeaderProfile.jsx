import './header-profile.scss';
import { Link } from "react-router-dom";
import { ReactComponent as ArrowBack } from './../../../assets/images/arrow-back.svg';
import LogOutButton from '../../atoms/LogOutButton/LogOutButton';

const HeaderProfile = ({ username, enableLogOut }) => {

    return (
        <div className="header">
            <div className='header-container mg-auto flex-between-center'>
                <div className='flex-between-center'>
                    <Link to="/feed">
                        <ArrowBack className="arrowback" />
                    </Link>
                    <span className='header-username font-press-2p inline-block'>{username}</span>
                </div>
                {/*Renderizado condicional para habilitar el Boton de LogOut */}
                {enableLogOut && <LogOutButton />}
            </div>
        </div>
    )
}

export default HeaderProfile;