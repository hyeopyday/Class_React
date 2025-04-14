import { useState } from "react";
import { Mail, Heart, MessageCircle } from "lucide-react";

// 메인 컴포넌트
export default function IntroductionPage({ 
  name = "이재협", 
  profession = "웹 개발자", 
  avatarColor = "bg-blue-500" 
}) {
  // 상태 관리
  const [likes, setLikes] = useState(0);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [message, setMessage] = useState("");
  
  // 좋아요 증가 함수
  const handleLike = () => {
    setLikes(likes + 1);
  };
  
  // 연락처 표시 토글 함수
  const toggleContact = () => {
    setIsContactVisible(!isContactVisible);
  };
  
  // 메시지 입력 처리 함수
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  // 메시지 전송 함수
  const sendMessage = () => {
    if (message.trim() !== "") {
      alert(`메시지가 전송되었습니다: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        {/* 프로필 헤더 */}
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 ${avatarColor} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
            {name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{profession}</p>
          </div>
        </div>
        
        {/* 소개 내용 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">자기 소개</h2>
          <p className="text-gray-700">
            안녕하세요! 저는 {profession}를 꿈꾸는 {name}입니다.
            어제 보다 나은 내일이 되기 위해 노력하는 사람이 되겠습니다! 
            
          </p>
        </div>
        
        {/* 액션 버튼 영역 */}
        <div className="flex space-x-2 mb-6">
          <button 
            onClick={handleLike} 
            className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
          >
            <Heart className="w-4 h-4 mr-2" />
            좋아요 {likes > 0 && <span className="ml-1">({likes})</span>}
          </button>
          
          <button 
            onClick={toggleContact} 
            className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
          >
            <Mail className="w-4 h-4 mr-2" />
            연락처 {isContactVisible ? "숨기기" : "보기"}
          </button>
        </div>
        
        {/* 연락처 정보 (토글) */}
        {isContactVisible && (
          <div className="p-4 bg-gray-50 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">연락처 정보</h3>
            <p className="text-gray-700">이메일: {name.toLowerCase()}@hyeop3228.com</p>
            <p className="text-gray-700">전화번호: 010-4680-3227</p>
          </div>
        )}
        
        {/* 메시지 입력 영역 */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">메시지 남기기</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="메시지를 입력하세요..."
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button 
              onClick={sendMessage}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}