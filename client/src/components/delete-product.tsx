import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { productAPI } from "@/api/service";
import { toast } from "sonner";
import { useState } from "react";

const DeleteProduct = (data: any) => {
  const [isOpen, setIsOpen] = useState(false);

  async function onSubmit() {
    try {
      const res = await productAPI.deleteService(`/product/delete/${data.data}`);
      console.log(res);
      if (res.responseCode === 200) {
        setIsOpen(false);
        toast("Tada!", {
          description: "Product deleted successfully",
        });
      }
    } catch (error) {
      toast("Oops!", {
        description: "Something went wrong",
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <Trash2 className="w-4 h-4 text-rose-700" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. This will permanently delete your data and remove from our servers.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={onSubmit} type="submit">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProduct;
