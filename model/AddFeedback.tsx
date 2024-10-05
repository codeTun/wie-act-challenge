"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function AddFeedback(formData: FormData) {
  await prisma.feedbacks.create({
    data: {
      name: formData.get("name") as string,
      stars: parseInt(formData.get("stars") as string),
      message: formData.get("message") as string, 
    },
  });
  revalidatePath("/");
}
