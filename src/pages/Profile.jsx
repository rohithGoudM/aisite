import {useParams} from 'react-router-dom';
import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { server_URI } from "../constants";
import { useSelector } from 'react-redux';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const {userId, token} = useParams();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(server_URI+'/profile/'+auth.user["_id"], {
          method: "GET",
          headers: {
            "authorization": auth.token
          }
        }); // Replace USER_ID with actual user ID or token
        if (!response.ok) {
          console.log(response)
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        setUserProfile(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        // navigate('/sign_in'); // Redirect to sign-in if error occurs
      }
    };

    if(auth.isAuthenticated)  {
      fetchUserProfile();
    } else{
      // throw new Error('You are not logged in');
      navigate('/sign_in');
    }
  }, [navigate, ]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <p><strong>Username:</strong> {userProfile.username}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Profile

