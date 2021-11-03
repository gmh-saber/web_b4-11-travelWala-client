import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

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
        <div className="w-50 md-w-75 col-12 col-md-12 col-lg-12 mx-auto shadow-lg bg-secondary my-5 p-5 rounded">
          <h3 className="text-center text-white my-3 ts-2">Sign In with
            <span className="g"> G</span>
            <span className="o1">O</span>
            <span className="o2">O</span>
            <span className="g2">G</span>
            <span className="l">L</span>
            <span className="e">E</span>
          </h3>

          <div className=" d-flex justify-content-center align-items-center">

            <button
              onClick={handleLogin}
              className="btn text-white  btn-info"
            >
              <i className="fab fa-google"></i> Google SingIn
            </button>


          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginBody;
