import './delete-alert.scss';
import { useContext } from 'react/cjs/react.development';
import { TweetsContext } from '../../../context/TweetContext';
import useTweets from '../../../hooks/useTweets';
import { initialTweetToDelete } from '../../../assets/scripts/constant';

const DeleteAlert = ({id, uid}) => {

    const { setShowDeleteAlert, setTweetToDelete } = useContext(TweetsContext);
    const { deleteTweet } = useTweets();

    const handleCanceleDelete = () => {
        setShowDeleteAlert(false);
        setTweetToDelete(initialTweetToDelete);
    }
    return (
        <div className="delete-alert-layout">
            <div className="delete-alert">
                <h1>DELETE TWEET?</h1>
                <p>This can’t be undone and it will be removed from your profile</p>
                <div className="buttons">
                    <button className='pink' onClick={() => deleteTweet(id, uid)}>Delete</button>
                    <button className='cancel-btn' onClick={handleCanceleDelete}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert;