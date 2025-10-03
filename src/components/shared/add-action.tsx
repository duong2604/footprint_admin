"use client";

import React from "react";
import AddForm from "./add-form";
import SheetForm from "./sheet-form";

interface AddActionProps {}

const sheetFormVariant = {
  trigger: {
    title: "Add product",
  },
  content: {
    header: {
      title: "Add product",
      description: "Add your product and necessary information from here",
    },
  },
  footer: {
    submitBtn: {
      title: "Submit",
    },
    closeBtn: {
      title: "Close",
    },
  },
};

export default function AddAction({
  children,
  sheet,
  ...props
}: React.ComponentProps<any> & AddActionProps) {
  return (
    <SheetForm sheet={sheetFormVariant}>
      <AddForm />
    </SheetForm>
  );
}
