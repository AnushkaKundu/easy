import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

const API_KEY = "5e2ef9a7b422424d93b29eefafd9eae0"; // Replace with your News API key

const News = () => {
    const [category, setCategory] = useState("business");
    const [searchQuery, setSearchQuery] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchNews();
    }, [category]);

    const fetchNews = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
            );
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
            );
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="news-container">
            <h2>News</h2>
            <div className="category-buttons">
                <button onClick={() => setCategory("business")}>Business</button>
                <button onClick={() => setCategory("sports")}>Sports</button>
                <button onClick={() => setCategory("politics")}>Politics</button>
                {/* Add more category buttons as needed */}
            </div>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for news"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="news-articles">
                {articles.map((article) => (
                    <div className="article" key={article.url}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
