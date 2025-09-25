import { useEffect, useState } from "react";
import { getNews, type Article } from "@/API/getnew";

export default function MainPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getNews("뉴스");
        setArticles(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="bg-gray-200">
      <h1 className="text-6xl text-center mb-[50px] pt-[50px] ">검색 결과</h1>
      <div className="flex flex-wrap justify-center gap-[50px]">
        {articles.map((a) => (
          <div
            key={a.link}
            className="gap-[50px] mb-[50px] bg-white w-[45%] p-[30px] flex flex-col"
          >
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              <h2
                dangerouslySetInnerHTML={{ __html: a.title }}
                className="text-3xl"
              />
              <p dangerouslySetInnerHTML={{ __html: a.description }} />
              <small dangerouslySetInnerHTML={{ __html: a.pubDate }} />
            </a>
            <input
              type="button"
              className="hover:bg-sky-700 hover:text-white bg-sky-500 text-white p-[10px] w-[100px]"
              value="즐겨찾기"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
