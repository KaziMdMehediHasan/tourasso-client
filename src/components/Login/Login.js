import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
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
    <div>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
