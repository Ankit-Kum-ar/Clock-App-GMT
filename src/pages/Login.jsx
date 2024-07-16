import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { validateSignUp } from '../utils/validateSignUp';
import { validateSignIn } from '../utils/validateSignIn';
import { createUserWithEmailAndPassword, getRedirectResult, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/Slices/userSlice';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);  
  const [signUpValue, setSignUpValue] = useState(false);

  // Used to get the email and password values from the input fields.
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const dispatch = useDispatch();

  // Used to store the error message.
  const[errorMessage, setErrorMessage] = useState(null);

  // Used to handle the error message.
  const handleError = () => {
 
    let msg = null;
    if(signUpValue){ // Call validateSignUp
      msg = validateSignUp(email.current.value, password.current.value, username.current.value)
      setErrorMessage(msg);
    }
    else { // Call validateSignIn
      msg = validateSignIn(email.current.value, password.current.value);
      setErrorMessage(msg);
    }

    if(msg !== null) return;

    if(signUpValue) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, username.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...

         // UpdateProfile API called for the username...
         updateProfile(user, {
            displayName: username.current.value
          }).then(() => {
          // Profile updated!
          const {uid, email, displayName} = auth.currentUser; // To access current user, we use auth.currentUser rather than user.
          dispatch(addUser({uid, email, displayName}));
          }).catch((error) => {
          setErrorMessage(error);
          });
      })
      .catch((error) => {
        setErrorMessage("The Email has already sign up.");
      });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user; 
      })
      .catch(() => {
        setErrorMessage("Invalid Details");
      });

    }
  }


  // Used to toogle change of password.
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Used to handle the registration of a new user.
  const handleRegister = () => {
    setSignUpValue(!signUpValue);
    console.log("SignUp value",signUpValue);
    setErrorMessage(null);
  };

  // Used to handle the Google Sign In.
  const handleGoogleClick = () => {
    // Google Sign In Logic
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const {uid, email, displayName} = user;
      console.log(user);
      dispatch(addUser({uid, email, displayName}))
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  }

  return (
    <div>
      <Header/>
      {/* <h1 className='text-center text-3xl font-bold'>Welcome Back</h1> */}
      <div className='flex md:p-4 p-3 justify-center mx-auto left-0 right-0 my-10 border-4 md:w-4/12 w-9/12 py-7'>

        {/* Form for login or sign-up */}
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4'>

          {/* Headings */}
          <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-semibold'>
              {signUpValue ? "Create your new account" : "Login to your account"}
            </h1>
            <p className='text-gray-600 font-normal'>
              {signUpValue? "Create an account to enjoy clock" : "Please sign in your account"}
            </p>
          </div>

          {/* Email input */}
          <div className='flex flex-col gap-1 mt-4'>
            <label className='font-semibold'>Email Address </label>
            <input type='email' placeholder='Enter Email' className=' p-3 border-2 border-gray-300 rounded-lg ' ref={email} />
          </div>

          {/* Username input for signup */}
          {signUpValue && (
            <div className='flex flex-col gap-1 mt-4'>
              <label className='font-semibold'>Username </label>
              <input type='text' placeholder='Enter Username' className=' p-3 border-2 border-gray-300 rounded-lg ' ref={username} />
            </div>
          )}

          {/* Password input */}
          <div className='flex flex-col gap-1 mt-5'>
            <label className='font-semibold'>Password </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                ref={password}
                className='p-3 border-2 border-gray-300 rounded-lg w-full pr-10'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Error message */}
          <p className='text-red-600 md:font-semibold font-medium'>{errorMessage}</p>

          {/* Sign In button */}
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded-full mt-3' onClick={handleError}>
            {signUpValue ? "Register" : "Sign In"}
          </button>

          <p className='text-center'>------------ Or sign in with -----------</p>

          {/* Google Sign In */}
          <FcGoogle className='w-8 h-10 flex left-0 mx-auto hover:cursor-pointer' onClick={handleGoogleClick}/>
 
          <p className='text-center'>
            {signUpValue ? "Already have an account?" : "Don't have an account?"}
            <span className='px-2 text-orange-500 cursor-pointer' onClick={handleRegister}>
              {signUpValue ? "Sign In" : "Register"}
            </span>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login
