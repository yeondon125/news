import type { AxiosResponse } from "axios";
import { NaverApi } from "../lib";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface NewsResponse extends AxiosResponse {
  data: {
    items: Article[];
  };
}

const getNews = async (query: string, display: number = 10) => {
  try {
    const res = await NaverApi.get<NewsResponse, NewsResponse>("", {
      params: { query, display },
    });
    return res.data.items;
  } catch (error) {
    console.error("뉴스 API 오류:", error);
    throw error;
  }
};

export { getNews };
export type { Article };
