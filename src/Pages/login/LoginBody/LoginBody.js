import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import "./LoginBody.css"
import '../../../Images/google.svg'

const LoginBody = () => {
  const { signInUsingGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Data, setData] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();

  const redirect_uri = location.state?.from || "/home";
  useEffect(() => {
    fetch("https://vast-earth-49506.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        const email = result.user.email;
        const name = result.user.displayName;
        const photo = result.user.photoURL;
        const newUser = { name, email, photo };
        setError("");

        let flag = 0;
        for (const singleData of Data) {
          if (singleData.email === email) {
            flag = 1;
            return;
          }
        }
        if (flag === 0) {
          fetch("https://vast-earth-49506.herokuapp.com/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {

                alert("Successfully added the user.");
                // e.target.reset();
              }
            });
        }
      })
      .catch((error) => { });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const email = result.user.email;
        const name = result.user.displayName;
        const newUser = { name, email };
        let flag = 0;
        for (const singleData of Data) {
          if (singleData.email === email) {
            flag = 1;
            return;
          }
        }
        if (flag === 0) {
          fetch("https://vast-earth-49506.herokuapp.com/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("Successfully added the user.");
                // e.target.reset();
              }
            });
        }
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    // handleAddUser();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="w-50 md-w-75 col-12 col-md-12 col-lg-12 mx-auto shadow-lg bg-light my-5 p-5  rounded">
          <h3 className="text-center text-secondary my-3 ts-2">Sign In with
            <span className="text-primary"> G</span>
            <span className="text-danger">O</span>
            <span className="text-warning">O</span>
            <span className="text-primary">G</span>
            <span className="text-primary">L</span>
            <span className="text-danger">E</span>
          </h3>

          <div className=" d-flex justify-content-center  align-items-center">

            <button
              onClick={handleLogin}
              className="btn text-white fs-5 fw-bold g-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>


            </button>


          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginBody;
