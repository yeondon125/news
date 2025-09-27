import { supabase } from "@/lib/index";
import type { Article } from "@/API/getnew";

export async function getFavorites() {
  const { data, error } = await supabase.from<Article>("scraps").select("*");
  if (error) {
    console.error("즐겨찾기 불러오기 오류:", error);
    throw error;
  }
  return data;
}
