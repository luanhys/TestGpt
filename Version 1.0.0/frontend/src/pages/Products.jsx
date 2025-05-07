import React from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Search } from "lucide-react";

export default function Products() {
  const products = [
    { name: "Golden Classic", category: "Luxury", price: "€ 499" },
    { name: "Elegant Silver", category: "Dress", price: "€ 299" },
    { name: "Sporty Black", category: "Sports", price: "€ 199" },
    { name: "Chronograph Pro", category: "Luxury", price: "€ 899" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-50 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Button>Add Product</Button>
        </div>

        <div className="mb-6 relative w-full max-w-md">
          <Input placeholder="Search products..." className="pl-10" />
          <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2">Product Name</th>
                <th className="py-2">Category</th>
                <th className="py-2">Price</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">{product.name}</td>
                  <td className="py-3 text-blue-600">{product.category}</td>
                  <td className="py-3">{product.price}</td>
                  <td className="py-3 text-blue-600 cursor-pointer hover:underline">
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
