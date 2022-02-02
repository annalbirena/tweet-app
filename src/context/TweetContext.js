import { createContext, useState } from "react";
import { initialTweetToDelete } from "../assets/scripts/constant";

export const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
        const [tweetsList, setTweetsList] = useState([]);
        const [tweetsUserList, setTweetsUserList] = useState([]);
        const [loadingTweets, setLoadingTweets] = useState(false);
        const [showDeleteAlert, setShowDeleteAlert] = useState(false);
        const [tweetToDelete, setTweetToDelete] = useState(initialTweetToDelete);

        return <TweetsContext.Provider
                value={{
                        tweetsList,
                        setTweetsList,
                        loadingTweets,
                        setLoadingTweets,
                        tweetsUserList,
                        setTweetsUserList,
                        showDeleteAlert,
                        setShowDeleteAlert,
                        tweetToDelete,
                        setTweetToDelete
                }}
        >
                {children}
        </TweetsContext.Provider>
}

export default TweetsProvider;