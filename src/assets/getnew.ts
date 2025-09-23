import { naverApi } from "../lib/axios";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const getNews = async (query: string, display: number = 10) => {
  try {
    const res = await naverApi.get("", {
      params: { query, display },
    });
    return res.data.items as Article[];
  } catch (error) {
    console.error("뉴스 API 오류:", error);
    throw error;
  }
};

export { getNews };
export type { Article };
