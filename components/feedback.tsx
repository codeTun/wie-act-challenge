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
import { AddFeedback } from "../model/AddFeedback"; // Adjust if path differs
import toast, { Toaster } from "react-hot-toast"; // Import toast

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
      className={`bg-indigo-900 hover:bg-indigo-800 text-white ${
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
      <Toaster position="top-right" /> {/* Toast container */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-indigo-900 hover:bg-indigo-800 text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Send Feedback
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send feedback</DialogTitle>
            <DialogDescription>
              We&apos;d love to hear your thoughts! Please fill out this form to
              send us your feedback.
            </DialogDescription>
          </DialogHeader> 
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="col-span-1">
                  Name
                </Label>
                <Input id="name" name="name" required className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="feedback" className="col-span-1">
                  Feedback
                </Label>
                <Textarea
                  id="feedback"
                  name="message" // Corrected to match server-side
                  required
                  className="col-span-3"
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
