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
          <Button variant="link" className="text-primary">
            <RxPerson size="25" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Authentication />
        </DialogContent>
      </Dialog>
    </>
  );
}
