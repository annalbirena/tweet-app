import './user-info.scss';
import Tab from '../../atoms/Tab/Tab';

const UserInfo = ({ color, photo, username, enableTab }) => {

    return (
        <div className='user-container'>
            <div className="user-info">
                <img className={`mg-auto border-${color}`} src={photo} alt="user-img" />
                <span className={`inline-block mg-auto font-press-2p bg-${color}`}>{username}</span>
            </div>
            {enableTab &&  <Tab />}
           
        </div>
    )
}

export default UserInfo;