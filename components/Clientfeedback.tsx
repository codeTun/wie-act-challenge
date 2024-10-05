"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { fetchFeedbacks } from "../model/FetchFeedbacks"; // Adjust the path if necessary

// Feedback card component
interface FeedbackCardProps {
  name: string;
  message: string;
  rating: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  name,
  message,
  rating,
}) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
    <div className="p-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-base">{name}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{message}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export function ClientFeedbackComponent() {
  const [feedbacks, setFeedbacks] = useState<FeedbackCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch feedbacks on component mount
  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const data = await fetchFeedbacks(); // Fetch feedbacks from the server

        // Map the server data to match the FeedbackCardProps structure
        const mappedFeedbacks = data.map((feedback) => ({
          name: feedback.name,
          message: feedback.message, // Map 'message' to 'feedback'
          rating: feedback.stars, // Map 'stars' to 'rating'
        }));

        setFeedbacks(mappedFeedbacks); // Set the mapped feedbacks to state
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    getFeedbacks();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading feedbacks...</div>;
  }

  return (
    <section className="bg-gray-900 from-purple-700 to-indigo-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <FeedbackCard
                key={index}
                name={feedback.name}
                message={feedback.message}
                rating={feedback.rating}
              />
            ))
          ) : (
            <div className="text-white text-center col-span-full">
              No feedbacks available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
