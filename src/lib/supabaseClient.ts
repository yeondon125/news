import { createClient } from "@supabase/supabase-js";

// Supabase 대시보드 → Project Settings → API 에서 복사
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase 클라이언트 생성
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export default supabase;
