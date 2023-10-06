import React, { useEffect, useRef, useState } from "react";
import News from "../news/News";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = "c3a0989bfc554641baff9b10901a0f52";
  const [newsList, setnewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-09-11&sortBy=publishedAt&apiKey=${apiKey}`;

  const queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setnewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <div className="news-app">
      <h1>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input
          className="btn-submit"
          onClick={handleSubmit}
          value="submit"
          type="submit"
        />
      </form>

      <div className="return-div">
        {newsList.map((news) => {
          return <News news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
