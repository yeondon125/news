import { useState } from "react";
import { supabase } from "@/lib";

export default function Login() {
  // 이메일, 비밀번호 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 함수
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Supabase 로그인 (이메일 + 비밀번호)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("로그인 실패: " + error.message);
    } else {
      alert("로그인 성공!");
      console.log("로그인 정보:", data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">로그인</h1>

      <form
        onSubmit={handleLogin}
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
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
