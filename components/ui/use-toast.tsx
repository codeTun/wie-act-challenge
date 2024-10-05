import { useState } from "react";

// Define the Toast type
interface Toast {
  title: string;
  description?: string; // Optional
  variant?: string; // Optional, adjust the type if you have specific variants
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]); // Specify the state type

  const toast = ({ title, description, variant = "default" }: Toast) => {
    setToasts((prev) => [...prev, { title, description, variant }]); // Use prev state for updates
    setTimeout(() => {
      setToasts((prev) => prev.slice(1)); // Remove the toast after a delay
    }, 3000);
  };

  return { toast, toasts };
}
