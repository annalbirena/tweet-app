import './tweet-form.scss';
import { useState } from 'react';
import { initialTweetFormState } from '../../../assets/scripts/constant';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../context/UserContext';
import useTweets from '../../../hooks/useTweets';

const TweetForm = () => {
    const [formState, setFormState] = useState(initialTweetFormState);
    const { user } = useContext(UserContext);
    const { addNewTweet } = useTweets();

    //Funcion que obtiene la fecha actual
    const actualDate = () => {
        let actualDate = new Date(),
            month = "" + (actualDate.getMonth() + 1),
            day = "" + actualDate.getDate(),
            year = actualDate.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    }

    const handleChange = (e) => {
        const length = e.target.value.length

        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            username: user.username,
            uid: user.uid,
            photo: user.photo,
            color: user.color,
            length: length,
            date: actualDate()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTweet(formState);
        setFormState(initialTweetFormState);
    }

    return (
        <div className="main-form">
            <div className="form mg-auto">
                <img className="img-user" src={user.photo} alt="img-user" />
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <textarea className={`form-text-area ${formState.length === 200 && "danger-text"}`} onChange={handleChange} value={formState.tweet} name="tweet" cols="30" rows="8" maxLength={200} placeholder="What's happening?"></textarea>
                        <div className="form-counter flex-between-center">
                            <span className="inline-block">{formState.length}</span>
                            <span className={`text-pink inline-block ${formState.length === 200 && "danger-shadow"}`}>200 max.</span>
                        </div>
                        <button className='font-press-2p' type='submit'>POST</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TweetForm;