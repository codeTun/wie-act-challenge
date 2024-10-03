'use client'

import { PlayArrow } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

interface ButtonIconProps {
  onClick?: () => void;
}

export function ButtonIcon({ onClick }: ButtonIconProps) {
  return (
    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" variant="outline" size="icon" onClick={onClick}>
      <PlayArrow className="h-8 w-8 text-black font-bold" />
    </Button>
  )
}