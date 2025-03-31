```javascript
import { useState } from "react";

// Input 필드 컴포넌트 (2개 이상의 props 사용)
const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border rounded p-2"
      />
    </div>
  );
};

// 버튼 컴포넌트 (2개 이상의 props 사용)
const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
    >
      {text}
    </button>
  );
};

// 비밀번호 입력 필드 (props + state 포함)
const PasswordInput = ({ label, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          className="w-full border rounded p-2"
        />
        <button
          type="button"
          className="absolute right-2 top-2 text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

// 회원가입 폼 (2개 이상의 state 포함)
const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = () => {
    alert(`회원가입 완료!\n이름: ${username}\n이메일: ${email}`);
  };
  
  return (
    <div className="max-w-sm mx-auto p-6 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">회원가입</h2>
      <InputField label="이름" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputField label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput label="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <PasswordInput label="비밀번호 확인" onChange={(e) => setConfirmPassword(e.target.value)} />
      <Button text="가입하기" onClick={handleSubmit} disabled={!username || !email || !password || password !== confirmPassword} />
    </div>
  );
};

// 메인 앱 컴포넌트
export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignupForm />
    </div>
  );
}
```

---

## 참조

* <https://chatgpt.com/>
