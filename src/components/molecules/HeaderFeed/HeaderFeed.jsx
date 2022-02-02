import './header-feed.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImg } from './../../../assets/images/logo-img-header.svg';
import { ReactComponent as Logotext } from './../../../assets/images/logo-text-header.svg';
import { useContext } from 'react/cjs/react.development';
import { TweetsContext } from '../../../context/TweetContext';

const HeaderFeed = ({ color, photo}) => {
    const { setLoadingTweets } =  useContext(TweetsContext);

    const handleLoading = () => {
        setLoadingTweets(true);
    }

    return (
        <div className="header">
            <div className="header-container mg-auto flex-between-center">
                <Link to="/profile-user/posts" onClick={handleLoading}>
                    <img className={`icon-user border-${color}`} src={photo} alt="icon-user" />
                </Link>
                <div>
                <LogoImg />
                </div>
                <div className="logo-header-container flex-between-center">
                    <Logotext className="logo-text" />
                </div>
            </div>
        </div>
    )
}

export default HeaderFeed;