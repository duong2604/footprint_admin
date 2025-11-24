"use client";

import SheetForm from "@/components/shared/sheet-form";
import ProductForm from "./product-form";
import { useState } from "react";

export default function AddProductButton() {
  const [open, setOpen] = useState(false);

  return (
    <SheetForm
      open={open}
      onOpenChange={setOpen}
      sheet={{
        trigger: {
          title: "Add Product",
        },
        content: {
          header: {
            title: "Create New Product",
            description:
              "Fill in the details below to add a new product to your inventory.",
          },
        },
        footer: {
          submitBtn: {
            title: "Save Product",
          },
          closeBtn: {
            title: "Cancel",
          },
        },
      }}
    >
      <ProductForm onSuccess={() => setOpen(false)} />
    </SheetForm>
  );
}
