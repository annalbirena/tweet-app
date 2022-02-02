import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { TweetsContext } from "../../../../context/TweetContext";
import { UserContext } from "../../../../context/UserContext";
import useTweets from "../../../../hooks/useTweets";
import Loader from "../../../atoms/Loader/Loader";
import ListTweets from "../../../organisms/ListTweets/ListTweets";

const ProfileFavorites = () => {

    const { getUserTweets } = useTweets();
    const { user } = useContext(UserContext);
    const { tweetsList, loadingTweets } = useContext(TweetsContext);

    useEffect(() => {
        const myTweets = async () => await getUserTweets(user.uid);
        myTweets();
    }, [])

    const idsFavoritesTweets = []

    tweetsList.forEach(element => {
        if (element.userLikes.includes(user.uid)) {
            idsFavoritesTweets.push(element.id);
        }
    });
    
    const favoritesTweets = [];

    tweetsList.forEach(tweet => {
        if (idsFavoritesTweets.includes(tweet.id)) {
            favoritesTweets.push(tweet);
        }
    })

    return (
        <div>
            <div className="layout-posts">
                {/* Pasar como props la lista de tweets (tweetsList) a renderizar */}
                {loadingTweets ? <Loader /> : <ListTweets tweets={favoritesTweets} />}
            </div>
        </div>
    )
}

export default ProfileFavorites;