import axios from "axios";

const naverApi = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/news.json",
  headers: {
    "X-Naver-Client-Id": import.meta.env.VITE_NAVER_CLIENT_ID!,
    "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_CLIENT_SECRET!,
  },
});

export { naverApi };
