"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function ImportItem() {
  return (
    <Button className="hover:cursor-pointer">
      <Upload /> Import
    </Button>
  );
}
