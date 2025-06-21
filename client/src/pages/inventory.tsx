import { productAPI } from "@/api/service";
import type { Product } from "@/api/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import moment from "moment";
import LoadingSkeleton from "@/components/loading-skeleton";
import AddProduct from "@/components/add-product";
import { toast } from "sonner";
import UpdateProduct from "@/components/update-product";
import DeleteProduct from "@/components/delete-product";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const listProduct = async () => {
      try {
        const res = await productAPI.getService(`/product/list`);
        if (res.responseCode === 200) {
          setProducts(res.responseData);
        }
      } catch (err) {
        toast("Oops!", {
          description: "Something went wrong",
        });
      }
    };
    listProduct();
  }, [products, setProducts]);

  // console.log(products);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between px-2 md:px-4">
        <p className="font-bold text-lg md:text-2xl">All Inventories</p>
        <AddProduct />
      </div>
      <div className="w-full h-screen p-8 overflow-auto">
        {products.length ? (
          <Table className="w-full table-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">NAME</TableHead>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">PRICE</TableHead>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">CATEGORY</TableHead>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">STOCK</TableHead>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">CREATED ON</TableHead>
                <TableHead className="text-xs text-gray-400 tracking-wider font-semibold">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: Product, index: number) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{moment(product.createdAt).format("lll")}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 items-center">
                      <UpdateProduct data={product} />
                      <DeleteProduct data={product._id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </div>
  );
};

export default Inventory;
