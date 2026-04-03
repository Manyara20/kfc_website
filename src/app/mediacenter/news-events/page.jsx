"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import NewsCard from "@/app/homepage/NewsCard";
import axios from "axios";

const formatDate = (dateStr) => {
  if (!dateStr) return "Unknown Date";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Unknown Date";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const NewsandEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/public`);
        setNewsData(
          response.data.map((post) => ({
            id: post.id,
            title: post.title || "Untitled",
            content: post.content || "",
            shortDescription: post.content
              ? post.content.slice(0, 100) + "..."
              : "No description available",
            image: post.image
              ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${post.image}`
              : "/images/placeholder.png",
            author: `By ${post.author_id || "Admin"}`,
            date: formatDate(post.date || post.created_at),
            comments: post.comments || 0,
          }))
        );
        setError("");
      } catch (err) {
        console.error("Error fetching news posts:", err.message);
        setError(
          err.response?.data?.error || "Failed to load news posts. Please try again later."
        );
      }
    };

    fetchNewsPosts();
  }, []);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <TopNavBar />
      <MainNavBar />
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#0E2E0E] font-black">
            News & Events
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-green-900 mt-1 sm:mt-2">
            Latest Updates
          </h2>
        </div>

        {error ? (
          <p className="text-red-500 text-center text-base xl:text-lg">{error}</p>
        ) : newsData.length === 0 ? (
          <p className="text-gray-600 text-center text-base xl:text-lg">
            No news posts available at this time.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {currentItems.map((item) => (
              <NewsCard
                key={item.id}
                href={`/mediacenter/news-events/${item.id}`}
                title={item.title}
                description={item.shortDescription}
                imageUrl={item.image}
                author={item.author}
                date={item.date}
                comments={item.comments}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center my-8 gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full transition ${
                  currentPage === page
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-white hover:bg-green-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
            >
              →
            </button>
          </div>
        )}
      </section>
      <FooterBottom />
    </>
  );
};

export default NewsandEvents;
