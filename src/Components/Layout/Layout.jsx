import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Layout = () => {
  
  const auth = getAuth();
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log('User signed out');
            navigate('/')
          })
          .catch((error) => {
            // An error happened.
            console.error('Sign-out error', error);
          });
      };

      
      const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      const userRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        setUserData(userSnapshot.data());
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
        {/* <Sidebar/> */}
        {userData && (
            <div>
            
            <h1>Hi: {userData.email} I love you soo much babyyyyyyy!!!</h1>
            {/* Display other user details */}
            </div>
        )}
    </div>
  )
}

export default Layout