import { supabase } from "@/lib/index";

export async function getNews(query: string) {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=API_KEY`;
  const res = await fetch(url);
  const data = await res.json();
  return data.articles;
}

export async function addFavorite(article: any, userId: string) {
  return await supabase.from("favorites").insert([
    {
      user_id: userId,
      article_title: article.title,
      article_desc: article.description,
      article_url: article.url,
      article_img: article.urlToImage,
    },
  ]);
}

export async function getFavorites(userId: string) {
  return await supabase.from("favorites").select("*").eq("user_id", userId);
}
