import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { TweetsContext } from "../../../../context/TweetContext";
import { UserContext } from "../../../../context/UserContext";
import useTweets from "../../../../hooks/useTweets";
import ListTweets from "../../../organisms/ListTweets/ListTweets";
import Loader from "../../../atoms/Loader/Loader";

const ProfilePosts = () => {

    const { getUserTweets } = useTweets()
    const { user } = useContext(UserContext);
    const { tweetsUserList, loadingTweets } = useContext(TweetsContext);

    useEffect(()=> {
        const myTweets = async () => await getUserTweets(user.uid);
        myTweets();
    },[])

    return (
        <div className="layout-posts">
             {/* Pasar como props la lista de tweets (tweetsUserList) a renderizar */}
             {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsUserList} />}
        </div>
    )
}

export default ProfilePosts;