// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles/tealighting">김다빈의 프로필</Link></li>
        <li><Link to="/profiles/dew">이이슬의 프로필</Link></li>
        <li><Link to="/profiles/yellow">조윤정의 프로필</Link></li>
        <li><Link to="/profiles/frontend">최예진의 프로필</Link></li>
        <li><Link to="/profiles/void">존재하지 않는 프로필</Link></li>
      </ul>
    </div>
  );
};

export default Home;
