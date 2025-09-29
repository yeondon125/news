import { supabase } from "@/lib/index";

export async function addFavorite(
  description: string,
  title: string,
  url: string
) {
  const { data, error } = await supabase.from("scraps").insert([
    {
      description: description,
      title: title,
      link: url,
    },
  ]);

  if (error) {
    console.error("DB 입력 오류:", error);
    throw error;
  }
  return data;
}
