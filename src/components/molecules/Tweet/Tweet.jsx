import './tweet.scss';
import { ReactComponent as FilledHeart } from '../../../assets/images/filled-heart.svg';
import { ReactComponent as EmptyHeart } from '../../../assets/images/empty-heart.svg';
import { ReactComponent as DeleteButton } from '../../../assets/images/delete-button.svg';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../context/UserContext';
import { TweetsContext } from '../../../context/TweetContext';
import { Link } from 'react-router-dom';
import useTweets from '../../../hooks/useTweets';

const Tweet = ({ id, tweet, username, uid, date, likes, userLikes, img, color }) => {

    const { user, userB, setUserB } = useContext(UserContext);
    const { setShowDeleteAlert, setTweetToDelete, setLoadingTweets } = useContext(TweetsContext);
    const { addLikes } = useTweets();

    const handleDelete = () => {
        setShowDeleteAlert(true);
        setTweetToDelete({ id: id, uid: uid });
    }

    const handleUserBInfo = () => {
        const newUserB = {
            ...userB,
            username: username,
            uid: uid,
            photo: img,
            color: color,
        }
        setUserB(newUserB);
        setLoadingTweets(true);
    }

    const handleLoading = () => {
        setLoadingTweets(true);
    }

    const handleLikes = () => {
        addLikes(id, user.uid, userB.uid);
    }

    //Convertir unixtime en lenguaje natural
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    function dateSensitive(date) {
        let newDate = new Date(date);
        let options = { month: 'short', day: 'numeric', timeZone: 'GMT' };
        let newDateSensitive = newDate.toLocaleDateString('es-ES', options);
        return (date === "") ? "Cualquier fecha" : newDateSensitive;
    }

    return (
        <div className="tweet-container">
            {/* //Renderizado condicional para Redirigir a Perfil de Usuario Activo o Perfil de Usuario externo */}
            {user && uid === user.uid ?
                <Link to={"/profile-user/posts"} onClick={handleLoading} className="tweet-user-img">
                    <img src={img} alt="img-user" />
                </Link>
                : <Link to={"/profile-user-B"} onClick={handleUserBInfo} className="tweet-user-img">
                    <img src={img} alt="img-user" />
                </Link>
            }
            <div className="tweet-info">
                <div className="tweet-header flex-between-center">
                    <div className="tweet-date">
                        <span className={`username bg-${color}`}>{username}</span>
                        <span className="date">{` - ${dateSensitive(date)}.`}</span>
                    </div>
                    {user && uid === user.uid && <button onClick={handleDelete}><DeleteButton className="delete-svg" /></button>}
                </div>
                <div className="tweet-text">
                    <p>{tweet}</p>
                </div>
                <div className='tweet-like'>
                    <button onClick={handleLikes}>
                        {userLikes.includes(user.uid) ? <FilledHeart className="heart" /> : <EmptyHeart className="heart" />}
                    </button>
                    <span className={`${userLikes.includes(user.uid) ? "f-color-pink" : ""}`}>{likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Tweet