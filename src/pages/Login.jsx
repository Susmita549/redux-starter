import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { loginAPI } from "../store/auth/auth.action";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state=>state.auth)
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    dispatch(loginAPI(loginCreds))
    
  };
  useEffect(()=>{
    if(isAuth){
      navigate(location.state.pathname || "/")
    }
  },[isAuth])

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
