import HeaderFeed from '../../molecules/HeaderFeed/HeaderFeed';
import TweetForm from '../../molecules/TweetForm/TweetForm';
import ListTweets from "../../organisms/ListTweets/ListTweets";
import Loader from '../../atoms/Loader/Loader';
import useTweets from '../../../hooks/useTweets';
import { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../context/UserContext';
import { TweetsContext } from '../../../context/TweetContext';

const Feed = () => {
    const { user } = useContext(UserContext);
    const { tweetsList, loadingTweets } = useContext(TweetsContext);
    const { getAllTweets } = useTweets();

    //Se ejecuta la funcion para obtener los tweets al renderizarse por primera vez el componente
    useEffect(() => {
        const tweets = async () => await getAllTweets();
        tweets();
    }, [])

    return (
        <div>
            <HeaderFeed color={user.color} photo={user.photo} />
            <TweetForm />
            {/* Pasar como props la lista de tweets (tweetsList) a renderizar */}
            {loadingTweets ? <Loader /> : <ListTweets tweets={tweetsList} />}
        </div>
    )
}

export default Feed;