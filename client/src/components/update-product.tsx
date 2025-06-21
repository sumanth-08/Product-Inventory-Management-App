import { productAPI } from "@/api/service";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import type { Product } from "@/api/types";

const UpdateProduct = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMes, setErrMsg] = useState();

  const form = useForm({
    defaultValues: {
      name: data.name || "",
      price: data.price || "",
      category: data.category || "",
      stock: data.stock || "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({
        name: data.name || "",
        price: data.price || "",
        category: data.category || "",
        stock: data.stock || "",
      });
    }
  }, [isOpen, form]);

  async function onSubmit(changes: Product) {
    console.log(data._id);
    try {
      const res = await productAPI.putService(`/product/update/${data._id}`, changes);
      if (res.responseCode === 200) {
        setIsOpen(false);
        setErrMsg(undefined)
        form.reset();
        toast("Tada!", {
          description: "Changes saved successfully",
        });
      } else if (res.responseCode === 201) {
        setErrMsg(res.responseMessage);
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
          <Pencil className="w-4 h-4 text-blue-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Product</DialogTitle>
          <DialogDescription></DialogDescription>
          {errorMes && <p className="text-xs text-red-700">{errorMes}</p>}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="product-name">Product name</Label>
                    <FormControl>
                      <Input type="text" placeholder="eg: Laptop" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="product-name">Price</Label>
                    <FormControl>
                      <Input placeholder="eg: 100" type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="category">Category</Label>
                    <FormControl>
                      <Input placeholder="eg: Electronics" type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="stock">Stock</Label>
                    <FormControl>
                      <Input placeholder="eg: 1" type="text" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
