import React from "react";
function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Familty Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
