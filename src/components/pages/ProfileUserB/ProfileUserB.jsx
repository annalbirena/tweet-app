import { useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { TweetsContext } from "../../../context/TweetContext";
import useTweets from "../../../hooks/useTweets";
import HeaderProfile from "../../molecules/HeaderProfile/HeaderProfile";
import UserInfo from "../../molecules/UserInfo/UserInfo";
import ListTweets from "../../organisms/ListTweets/ListTweets";
import Loader from "../../atoms/Loader/Loader";

const ProfileUserB = () => {

    const { userB } = useContext(UserContext);
    const { getUserTweets } = useTweets();
    const { tweetsUserList, loadingTweets } = useContext(TweetsContext);

    useEffect(() => {
        const tweetsUserB = async () => await getUserTweets(userB.uid);
        tweetsUserB();
    }, [])

    return (
        <div>
            <HeaderProfile username={userB.username} enableLogOut={false} ></HeaderProfile>
            <UserInfo color={userB.color} photo={userB.photo} username={userB.username} enableTab={false}></UserInfo>
            {/* Pasar como props la lista de tweets (tweetsUserList) a renderizar */}
            {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsUserList} />}
        </div>
    )
}

export default ProfileUserB;