import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Noticias() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=câmara dos deputados&language=pt&apiKey=52dad923ede948719e9fbf65bfb6fcf3'
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Notícias da Câmara dos Deputados</h1>
      {news.map((article) => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url}>Ler mais</a>
        </div>
      ))}
    </div>
  );
}

export {Noticias};
