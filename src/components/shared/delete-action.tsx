"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function DeleteAction() {
  return (
    <Button className="bg-red-500 text-white hover:cursor-pointer">
      <Trash2 /> Delete
    </Button>
  );
}
