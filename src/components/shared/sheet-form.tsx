"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";

interface SheetFormProps {
  children: React.ReactNode;
  sheet: {
    trigger: {
      title: string;
    };
    content: {
      header: { title: string; description: string };
    };
    footer: {
      submitBtn: {
        title: string;
      };
      closeBtn: {
        title: string;
      };
    };
  };
}

const SheetForm = ({
  children,
  sheet,
  ...props
}: SheetFormProps & React.ComponentProps<any>) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-cyan-500 text-white hover:cursor-pointer">
            <Plus /> {sheet.trigger.title}
          </Button>
        </SheetTrigger>
        <SheetContent className="md:min-w-2xl" {...props}>
          <SheetHeader>
            <SheetTitle>{sheet.content.header.title}</SheetTitle>
            <SheetDescription>
              {sheet.content.header.description}
            </SheetDescription>
          </SheetHeader>
          {children}
          <SheetFooter>
            <Button type="submit">{sheet.footer.submitBtn.title}</Button>
            <SheetClose asChild>
              <Button variant="outline">{sheet.footer.closeBtn.title}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SheetForm;
