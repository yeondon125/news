import { useEffect, useState } from "react";
import { getNews } from "../assets/getnew";
import type { Article } from "../assets/getnew";

export default function MainPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getNews("프론트엔드");
        setArticles(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>검색 결과</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.link}>
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
            <p>{a.description}</p>
            <small>{a.pubDate}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
