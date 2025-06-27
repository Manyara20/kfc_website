"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// EventCard component
const EventCard = ({ date, title, time, venue, onClick }) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate().toString().padStart(2, "0");
  const month = eventDate.toLocaleString("default", { month: "short" });

  return (
    <button
      onClick={onClick}
      className="flex-none w-full sm:w-1/3 p-2 sm:p-3 transition-all duration-200 hover:bg-[#e6f5e6] hover:text-[#000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0000]"
    >
      <div className="bg-[#fe7c02] text-[#fff] rounded p-2 sm:p-3 flex flex-col h-full">
        <img
          src="/kfc/facility/lib.jpg"
          alt="Event Banner"
          className="w-full h-32 sm:h-40 object-cover rounded mb-2"
        />
        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#000] text-white flex flex-col items-center justify-center rounded mb-2">
          <span className="text-sm sm:text-base font-bold">{day}</span>
          <span className="text-[8px] sm:text-[10px] uppercase">{month}</span>
        </div>
        <div className="flex flex-col text-xs sm:text-sm text-left">
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Date:</strong> {day} {month}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Venue:</strong> {venue}</p>
        </div>
      </div>
    </button>
  );
};

const EventsFeed = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const eventsRef = useRef(null);

  // Fetch events and filter out past events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/public`);
        const currentDate = new Date();
        // Filter events to include only future or current events
        const futureEvents = response.data.filter(
          (event) => new Date(event.date) >= currentDate.setHours(0, 0, 0, 0)
        );
        // Take only the first three events
        setEvents(futureEvents.slice(0, 3));
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load events.");
      }
    };

    fetchEvents();
  }, []);

  // Hide section if no events
  if (events.length === 0 && !error) {
    return null;
  }

  return (
    <section className="bg-[#fff] py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-[#0E2E0E]">
        Upcoming Events
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-[#ffffff] p-2 sm:p-4 border-2]">
          
          {error ? (
            <p className="text-red-500 text-xs sm:text-sm">{error}</p>
          ) : (
            <div ref={eventsRef} className="flex flex-col sm:flex-row sm:space-x-4">
              {events.map((item, index) => (
                <EventCard
                  key={index}
                  date={item.date}
                  title={item.title}
                  time={item.time}
                  venue={item.venue}
                  onClick={() => console.log(`Clicked Event: ${item.title}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsFeed;