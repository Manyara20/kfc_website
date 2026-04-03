"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const formatDate = (dateStr) => {
  if (!dateStr) return "Unknown Date";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Unknown Date";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const getImageUrl = (image) => {
  if (!image) return "/images/placeholder.png";
  return `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${image}`;
};

export default function PostDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/public`);
        const found = response.data.find((p) => String(p.id) === String(id));
        if (!found) {
          setError("Post not found.");
        } else {
          setPost(found);
        }
      } catch (err) {
        console.error("Error fetching post:", err.message);
        setError("Failed to load the post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <TopNavBar />
      <MainNavBar />
      <section className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push("/mediacenter/news-events")}
            className="mb-6 px-4 py-2 bg-[#0D3C00] text-white rounded hover:bg-green-700 transition"
          >
            ← Back to News
          </button>

          {loading && (
            <p className="text-gray-600 text-center">Loading…</p>
          )}

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          {post && (
            <article className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={getImageUrl(post.image)}
                alt={post.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0E2E0E] mb-2">
                  {post.title}
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                  {formatDate(post.date || post.created_at)}
                </p>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
      <FooterBottom />
    </>
  );
}
