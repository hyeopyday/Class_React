
# 🎯 React Router 실습 튜토리얼

리액트 라우터를 활용하여 간단한 페이지 이동, 쿼리스트링, 동적 라우팅을 익히는 실습입니다.  
`Home`, `About`, `Profile` 페이지를 구성하고, URL에 따라 조건부 렌더링이 어떻게 작동하는지 경험할 수 있습니다.

---

## 📁 프로젝트 구조

router-tutorial/
├── src/
│ ├── index.js # 진입점, Router 등록
│ ├── App.js # 라우터 정의
│ └── pages/
│ ├── Home.js # 홈 페이지
│ ├── About.js # 쿼리스트링 활용
│ └── Profile.js # 동적 URL 파라미터


---

## ⚙️ 설치 및 실행 방법

```bash
npx create-react-app router-tutorial
cd router-tutorial
npm install react-router-dom
npm start
```
---

## 🧠 주요 코드 설명
✅ index.js

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

✅ App.js

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;
```

✅ Home.js

```jsx
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
```

✅ About.js (쿼리스트링 사용)

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? 'false' : 'true' });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
```

✅ Profile.js (동적 파라미터)

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  tealighting: {
    name: '김다빈',
    description: '보안에 관심있는 학생',
  },
  dew: {
    name: '이이슬',
    description: 'DB에 관심있는 학생',
  },
  yellow: {
    name: '조윤정',
    description: '컴퓨터에 관심있는 학생',
  },
  frontend: {
    name: '최예진',
    description: 'front-end에 관심있는 학생',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```
---

## 🏁 실습 목표 정리

 react-router-dom 사용법 익히기

 페이지 이동 (Link, Route)

 쿼리스트링 사용 (useSearchParams)

 동적 파라미터 (useParams)

 URL에 따라 조건부 렌더링 구현

 
---

## 출저

<https://chatgpt.com/>
