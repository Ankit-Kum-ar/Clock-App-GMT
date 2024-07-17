import React, { useEffect } from 'react'
import logo from "../assets/clock.jpg"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../redux/Slices/userSlice';
import { FaUser } from "react-icons/fa";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // Call the API of onAuthStateChange (this is like an event listener, so called at once).
  // At once can be done by useEffect().
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      // When user Sign-In or Sign-out then this condition execute.
      if (user) { 
        const {uid, email, displayName} = user;
        // Here we dispatch the user to store.
        dispatch(addUser({uid,email,displayName}));
        navigate('/browser')
        

      } else { // When user Sign-Out then this condition execute.

        // Here we dispatch the user to store.
        dispatch(removeUser());
        navigate('/')
      }
    });
  },[])

  const handleSignOut = () => {
    // Here write the signOut Logic for sign out the user from App using firebox
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    }); 
  }

  return (
    <div className='flex flex-row'>
      <img className='md:w-24 md:h-20 h-14 p-2' src={logo} alt="LOGO"/>
      <h1 className='md:my-4 my-3 text-violet-950 md:text-4xl text-2xl md:font-bold font-semibold text-center '>Time Tracker</h1>
      {
            // Check if user sign in or sign out, bcz userSlice is null if user is signOut.
            user ? (
              <div className="md:my-4 my-2 pr-3 md:pr-12 flex items-end ml-auto left-0">
                <button className="bg-orange-500 hover:bg-orange-700 md:p-2 p-1 md:px-4 px-2 rounded-md text-white md:font-semibold font-medium flex gap-2" onClick={handleSignOut}>
                  <span className="my-1"><FaUser /></span>
                  Sign Out
                </button>
            </div>
            ) : <></>
      }
    </div>
  )
}

export default Header
