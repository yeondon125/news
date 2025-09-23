import { useEffect, useState } from "react";
import { getNews } from "../assets/getnew";
import type { Article } from "../assets/getnew";

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
      <h1 className="text-6xl text-center mb-[50px]">검색 결과</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.link} className="gap-[50px] mb-[50px] bg-white ">
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{ __html: a.title }}
            />

            <p dangerouslySetInnerHTML={{ __html: a.description }} />
            <small dangerouslySetInnerHTML={{ __html: a.pubDate }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
