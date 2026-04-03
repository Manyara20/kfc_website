"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const photos = [
  { id: 1, src: "/kfc/core/core1.jpeg", caption: "Kenya Forestry College" },
  { id: 2, src: "/kfc/core/wood.jpg", caption: "Wood Technology" },
  { id: 3, src: "/kfc/Hospitality.jpg", caption: "Hospitality" },
  { id: 4, src: "/kfc/facility/comp_lab.jpg", caption: "Computer Lab" },
  { id: 5, src: "/kfc/facility/comp_lab.jpg", caption: "Computer Lab" },
  { id: 6, src: "/kfc/facility/comp.jpg", caption: "Computer Lab" },
  { id: 7, src: "/kfc/facility/hostel.jpg", caption: "Student Hostels" },
  { id: 8, src: "/kfc/facility/lib.jpg", caption: "Library" },
  { id: 9, src: "/kfc/facility/libs.jpg", caption: "Library" },
];

export default function KFSGalleryPage() {
  const [lightbox, setLightbox] = useState(null); // index of open photo, or null

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    setLightbox((i) => (i + 1) % photos.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((i) => (i - 1 + photos.length) % photos.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div>
      <TopNavBar />
      <MainNavBar />

      <div className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 bg-white min-h-screen">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#023011]">
            KFC Photo Gallery
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Our moments through the lens showcasing conservation, forestry, and nature.
          </p>
        </div>

        {/* Grid: 1 col on mobile → 2 on sm → 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group bg-white border border-gray-200 shadow-md   overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0D3C00] focus:ring-offset-2 text-left w-full"
              aria-label={`View ${photo.caption}`}
            >
              <div className="relative w-full h-48 sm:h-56 md:h-60">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ⊕
                  </span>
                </div>
              </div>
              <p className="text-sm text-center text-gray-700 py-2 px-3 font-medium">
                {photo.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      <FooterBottom />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Card — stop propagation so clicking the image doesn't close */}
          <div
            className="relative w-full max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full h-[60vw] max-h-[80vh] min-h-48   overflow-hidden">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].caption}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            {/* Caption */}
            <p className="text-white text-center mt-3 text-sm sm:text-base">
              {photos[lightbox].caption}
              <span className="text-gray-400 ml-2 text-xs">
                {lightbox + 1} / {photos.length}
              </span>
            </p>

            {/* Prev / Next */}
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-lg transition-colors"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-lg transition-colors"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
