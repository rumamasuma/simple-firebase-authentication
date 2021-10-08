import { getAuth, signInWithPopup, GoogleAuthProvider ,
   GithubAuthProvider ,signOut,FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';



initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function App() {
  const [user,setUser] = useState({});
  const auth = getAuth();

 const handleGoogleSignIn = () =>{
 
  signInWithPopup(auth , googleProvider)
  .then(result =>{
    // const user = result.user;
    // console.log(user);
    const {displayName,email, photoURL} = result.user;
    
    const loggedInUser = {
      name : displayName,
     email : email,
      photo : photoURL
    };
    setUser(loggedInUser);
  })
  .catch(error =>{
    console.log(error.message);
  })
 }
//  github sign in button function

const handleGithubSignIn =() =>{
  signInWithPopup(auth, githubProvider)
  .then(result =>{
    // const user = result.user;
    // console.log(user);
    const {displayName, email, photoURL} = result.user;
    const loggedInUser = {
      name : displayName,
      email : email,
      photo : photoURL
    }
    setUser(loggedInUser);
  })
}
// facebook log in event handler
const handleFacebookLogIn =() =>{
  signInWithPopup(auth, facebookProvider)
  .then(result =>{
    // const user = result.user;
    // console.log(user);
    const {displayName, email, photoURL} = result.user;
    const loggedInUser = {
      name : displayName,
      email : email,
      photo : photoURL
    }
    setUser(loggedInUser);
  })
}
// sign out button
const handleSignOut =() =>{
  signOut(auth)
  .then(  () =>{
    setUser({});
  })
}

  return (
    <div className="App">
  {! user.name ?
  <div>
  <button onClick ={handleGoogleSignIn}>Google Sign In</button>
  <button  onClick ={handleGithubSignIn}>Github Sign in</button>
  <button  onClick ={handleFacebookLogIn}>Facebook log in</button>
  </div> :
  <button onClick = {handleSignOut}>Sign Out</button>
  }
  
  <br />
  {
    user.name && <div>
      <h2>welcome {user.name}</h2>
      <p>Your email is  {user.email}</p>
      <img src={user.photo} alt="" />
    </div>
  }
     </div>
    
  )
}

export default App;
