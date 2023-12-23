import './feed.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase.js';
import firebase from 'firebase/compat/app';

import InputOption from '../inputOption/InputOption';


import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../post/Post.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice.js';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);

   
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.profileUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });

        setInput("");

    }

    return (
        <div className="feed">

            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}

                    />
                ))}

            </FlipMove>
        </div>
    )
}

export default Feed;