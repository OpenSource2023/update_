import React, { useState } from "react";
import Navbar2 from "../Navbar2";
import './Register.css'; // Register.css 파일을 임포트합니다.

function Register() {
  const [name, setName] = useState(''); 
  const [userId, setUserId] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직을 여기에 추가합니다.
    // API 호출 로직을 추가합니다.
    const userData = {
      name,
      userId,
      password1,
      password2,
      gender,
      birthDate,
      phone,
      email
    };
    console.log(userData);
    // API 호출 예: axios.post('/api/register', userData)
  };

  return (
    <>
      <Navbar2 />
      <div className="register-container">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <input
              name='userId'
              placeholder='아이디'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              name='password1'
              type='password'
              placeholder='비밀번호'
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              name='password2'
              type='password'
              placeholder='비밀번호 확인'
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              name='name'
              placeholder='이름'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <select
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">성별</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </select>
          </div>
          <div className="input-group">
            <input
              name='birthDate'
              type='date'
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              name='phone'
              placeholder='연락처 (숫자만)'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              name='email'
              type='email'
              placeholder='이메일'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="confirm-button">확인</button>
        </form>
      </div>
      <footer className="footer">
        <p className="footer-by">made by OpenSource</p>
      </footer>
    </>
  );
}

export default Register;