import { useEffect, useState } from "react";
import { getFavorites } from "@/API/getfavorite";
import type { Article } from "@/API/getnew";

export default function MyPage() {
  const [favorites, setFavorites] = useState<Article[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getFavorites();
        setFavorites(data || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="text-6xl text-center">my page</h1>
      <div className="mt-[100px] ml-[100px] text-3xl">즐겨찾기</div>
      <div className="flex flex-wrap gap-6 justify-center">
        {favorites.map((fav, index) => (
          <div key={index} className="bg-white p-4 w-[45%] rounded shadow">
            <a href={fav.link} target="_blank" rel="noopener noreferrer">
              <h2
                className="text-2xl font-bold "
                dangerouslySetInnerHTML={{ __html: fav.title }}
              />
              <p dangerouslySetInnerHTML={{ __html: fav.description }} />
              <small dangerouslySetInnerHTML={{ __html: fav.pub_date }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
