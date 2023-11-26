import React, { useState } from "react";
import Navbar2 from "../Navbar2";
import './login.css'; // LoginForm.css 파일을 임포트합니다.

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 추가합니다.
    // 예: API 호출
    console.log("로그인 시도:", userId, password);
    // 실제 애플리케이션에서는 여기에 API 호출 로직을 추가합니다.
  };

  return (
    <>
      <Navbar2 />
      <div className="login-container">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <input
              type="text"
              name="userId"
              placeholder="아이디"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>
      </div>
      <footer className="footer">
        <p className="footer-by">made by OpenSource</p>
      </footer>
    </>
  );
}

export default Login;
