import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function ModernWorkInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-900 text-white px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="relative z-10 space-y-8 text-center backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex justify-center">
            <div className="relative">
              <Loader2 className="h-24 w-24 animate-spin text-indigo-300" />
              <div className="absolute inset-0 rounded-full border-t-4 border-indigo-200 animate-spin"></div>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            200 - Work in Progress
          </h1>
          <p className="text-xl text-indigo-200">
            This page isn&apos;t lost, it&apos;s just fashionably late.
          </p>
          <p className="text-lg max-w-md mx-auto">
            Our digital artisans are crafting something extraordinary. The
            anticipation is part of the experience!
          </p>
          <p className="text-lg font-semibold text-indigo-300">
            Stay tuned for the big reveal!
          </p>
          <div className="pt-6">
            <Button
              asChild
              className="bg-white text-indigo-700 hover:bg-indigo-100 transition-colors duration-300"
            >
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-indigo-200 text-sm">
        © {new Date().getFullYear()} Defend Her. All rights reserved.
      </footer>
    </div>
  );
}