import React, {useState} from 'react'
import './login.css';
import linkedinImg from '../../assets/linkedin-logo.png';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';



function Login() {

    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [password, setPassword] = useState('');     
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert("Invalid Credentials \n\n" + error));
    };

    const register = () => {
        if(!name){
            alert('Please enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            })
        }).catch(error => alert(error.message));
    };

  return (

    <div className='login'>
        <img src={linkedinImg} alt="logo-img" />
        <form>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)"  />
            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <button type="submit" onClick={loginToApp}>Sign In</button>

        </form>

        <p >Not a member ? <span className='login-register' onClick={register}> Register Now</span></p>
    </div>
  )
}

export default Login;