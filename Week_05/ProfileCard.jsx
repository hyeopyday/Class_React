
import React, { useState } from "react";

function ProfileCard() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };

  return (
    <div className="card">
      <img className="avatar" src="/profile.jpg" alt="Profile" />
      <h2 className="name">이재협</h2>
      <p className="description">경성대 학생 | React & TypeScript</p>
      <button className="button" onClick={handleContactClick}>연락하기</button>
      {showContact && <p className="contact-info">연락처: hyeop3228@naver.com</p>}
    </div>
  );
}
