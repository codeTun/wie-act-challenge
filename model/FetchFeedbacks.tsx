"use server";  

import prisma from "@/lib/db";  

// Fetch all feedbacks from the Feedbacks model
export async function fetchFeedbacks() {
  try {
    const feedbacks = await prisma.feedbacks.findMany();  // Use findMany to get all records
    return feedbacks;  // Return the fetched records
  } catch (error) {
    console.error("Error fetching feedbacks:", error);  
    throw new Error("Could not fetch feedbacks.");  
  }
}
