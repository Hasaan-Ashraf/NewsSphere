const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2";

export const getNews = async (query = "technology") => {
    console.log("API Key exists:", !!API_KEY);

    if (!API_KEY) {
        throw new Error(
            "News API key is missing. Check your .env file."
        );
    }

    const url =
        `${BASE_URL}/everything` +
        `?q=${encodeURIComponent(query)}` +
        `&sortBy=publishedAt` +
        `&pageSize=30` +
        `&language=en` +
        `&apiKey=${API_KEY}`;

    console.log("Fetching news for:", query);

    const response = await fetch(url);

    const data = await response.json();

    console.log("News API response:", data);

    if (!response.ok || data.status !== "ok") {
        throw new Error(
            data.message || `News API returned status ${response.status}`
        );
    }

    return data.articles;
};