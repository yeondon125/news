import { createClient } from "@supabase/supabase-js";

// Supabase 대시보드 → Project Settings → API 에서 복사
const supabaseUrl = "https://fptyyzmhedoqzignqncr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwdHl5em1oZWRvcXppZ25xbmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MjgxNDksImV4cCI6MjA3NDEwNDE0OX0.Cv6mjWQ0lUoZpvgWaxI7Sv5iHN5X1FDS1cgC7LZXMlQ";

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseKey);

// RegisterForm 타입 예시 추가
type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

const onSubmit = async (data: RegisterForm) => {
  const { username, email, password } = data;

  const { data: signUpData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
      emailRedirectTo: `${window.location.origin}/login`, // 백틱 사용
    },
  });

  // 결과 처리 예시
  if (error) {
    console.error(error.message);
  } else {
    console.log("회원가입 성공", signUpData);
  }
};