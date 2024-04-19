import Authentication from "@/components/authentication";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

import { RxPerson } from "react-icons/rx";
export function Login() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="link">
            <RxPerson size="28" className="fill-red-400" />
          </Button>
        </DialogTrigger>
        <DialogContent className="dark bg-background sm:max-w-[425px]">
          <Authentication />
        </DialogContent>
      </Dialog>
    </>
  );
}
