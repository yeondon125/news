import { useState } from "react";
import { supabase } from "@/lib/index";

export default function SignUp() {
  // 이메일, 비밀번호 상태 관리
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 회원가입 함수
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("회원가입 실패: " + error.message);
    } else {
      alert("회원가입 성공! 이메일 확인 후 로그인해주세요.");
      console.log("회원가입 정보:", data);
      // 회원가입 후 로그인 페이지로 이동하려면 여기서 라우팅 가능
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">회원가입</h1>

      <form
        onSubmit={handleSignUp}
        className="flex flex-col gap-2 w-64 border p-4 rounded"
      >
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
