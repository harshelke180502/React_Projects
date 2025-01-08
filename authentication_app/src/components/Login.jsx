import React, { useState,useEffect } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword , signOut} from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]=useState(null)
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
       const loggedInUser=userCredentials.user;
       setUser(loggedInUser);     
      })
      .catch((error) => {
        console.error('Error creating account:', error);
      });
  };

  const logOut=()=>{
    signOut(auth)
    .then(()=>{
        setUser(null);
        console.log("sign out")
    }).catch((error)=>{
        console.log(error)
    })
  }

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((user)=>{
        if(user){
            setUser(user);
        }
        else{
            setUser(null);
        }

      
    });

    return () => unsubscribe();
  },[])


  return (
    <div>
      <form onSubmit={login}>
        <h1>Log In</h1>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log In</button>
      </form>
      {user?(
        <div>
        <p>Welcome,{user.email}</p>
        <button onClick={logOut}>Log Out</button>
        </div>
      ):(
        <p>You are not logged In</p>
      )

      }
      
    </div>
  );
}
