import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginWithGoogle, user } = useAuth();
  console.log(user);
  return (
    <div>
      <button onClick={loginWithGoogle} className="btn btn-primary">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
