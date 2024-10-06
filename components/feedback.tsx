"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AddFeedback } from "../model/AddFeedback";
import toast from "react-hot-toast";

// Star Rating Component
interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

function StarRating({ rating, setRating }: StarRatingProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
}

// Submit Button
function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={`bg-indigo-900 hover:bg-indigo-800 text-white bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Submitting..." : "Submit feedback"}
    </Button>
  );
}

// Main Feedback Component
export default function Feedback() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // Handle Form Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Create form data
    const formData = new FormData(e.currentTarget);
    formData.append("stars", rating.toString());

    try {
      await AddFeedback(formData); // Call the server function to save feedback
      toast.success("Feedback submitted successfully!"); // Success toast
      setOpen(false); // Close the dialog
      setRating(0); // Reset the rating
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again."); // Error toast
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <MessageCircle className="mr-2 h-4 w-4" />
            Send Feedback
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-gray-900 p-6 sm:max-w-[500px] rounded-lg shadow-xl">
          <DialogHeader className="text-center mb-4">
            <DialogTitle className="text-2xl font-bold text-white">
              Send Feedback
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-400">
              We&apos;d love to hear your thoughts! Please fill out this form to
              send us your feedback.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:ring-purple-500 focus:border-purple-500 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="feedback" className="text-white">
                  Feedback
                </Label>
                <Textarea
                  id="feedback"
                  name="message"
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:ring-purple-500 focus:border-purple-500 rounded-md"
                />
              </div>

              <StarRating rating={rating} setRating={setRating} />
            </div>

            <DialogFooter className="flex justify-center">
              <SubmitButton loading={loading} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
