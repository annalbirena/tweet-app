import './list-tweets.scss';
import Tweet from "../../molecules/Tweet/Tweet";
import NotFoundAlert from '../../atoms/NotFoundAlert/NotFoundAlert';

const ListTweets = ({ tweets }) => {

    return (
        <div>
            <div className="list-tweets mg-auto">
                {tweets.length > 0
                    ? tweets.map(tweet => (
                        <Tweet
                            key={tweet.id}
                            id={tweet.id}
                            tweet={tweet.tweet}
                            username={tweet.username}
                            uid={tweet.uid}
                            date={tweet.date}
                            likes={tweet.likes}
                            userLikes={tweet.userLikes}
                            img={tweet.photo}
                            color={tweet.color}
                        />
                    ))
                    : <NotFoundAlert />}
            </div>

        </div>
    )
}

export default ListTweets;