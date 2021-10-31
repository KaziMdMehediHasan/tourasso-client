import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  //icon
  const google = <FontAwesomeIcon icon={faGoogle} size="3x" />;
  const { loginWithGoogle, user, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(user);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setIsLoading(true);
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div>
        <h1>
          <b>{google}</b>
        </h1>
      </div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-primary">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
