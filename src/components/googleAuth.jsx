import React, { useState } from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../authSlice.jsx";

async function getUserInfo(codeResponse) {
  var response = await fetch("https://localhost:5000/google_login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: codeResponse.code }),
  });
  return await response.json();
}

async function getProtected() {
  var response = await fetch("/protected", {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((msg) => console.log(msg));
}
export default function GoogleAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      var userData = await getUserInfo(codeResponse);

      // setMessage("Sign-in successful");
      dispatch(login({ user: userData, token: userData["token"] }));
      console.log("Sign in success");
      setTimeout(() => {
        navigate("/profile/");
        // this.props.user_details.navigate('profile', {
        //   itemId: 86,
        //   user_id: data._id,
        // });
      }, 1000);
    },
  });

  const handleLogout = () => {
    getProtected();
    setLoggedIn(false);
  };

  return (
    // <>
    //   {!loggedIn ? (
    //     <IconButton
    //       color="primary"
    //       aria-label="add to shopping cart"
    //       onClick={() => googleLogin()}
    //     >
    //       <GoogleIcon fontSize="large" />
    //     </IconButton>
    //   ) : (
    //     <UserAvatar userName={user.name} onClick={handleLogout}></UserAvatar>
    //   )}
    // </>
    <div className="flex flex-col space-y-4 mb-4">
      <button
        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="button" // Changed to button to prevent form submission
        onClick={() => googleLogin()}
      >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300 justify-center" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-center">
          Continue with Google
        </span>
        <BottomGradient />
      </button>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
