import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
export function EditChampionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="border border-foreground">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-zinc-400">
            Escolha os campeões
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
