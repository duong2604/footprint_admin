import { prisma } from "@/lib/prisma";
import ProductList from "@/components/products/product-list";
import AddProductButton from "@/components/products/add-product-button";

export const dynamic = "force-dynamic";

export default async function Products() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-5 border-b">
        <h1 className="text-2xl font-semibold">Products</h1>
        <AddProductButton />
      </div>
      <div className="flex-1 p-5">
        <ProductList products={products} />
      </div>
    </div>
  );
}
