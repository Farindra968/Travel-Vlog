import React from "react";
import { SubTitle } from "../ui/SubTitle";
import SecondaryTitle from "../ui/SecondaryTitle";
import productData from "@/data/product";
import ProductCard from "../ui/ProductCard";

const ProductSection = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-4 lg:px-2">
      <div className="flex justify-between items-center py-4">
        <div>
          <SubTitle title="top destination" />
          <SecondaryTitle title="Explore top destination" />
        </div>
        <div className="flex gap-6 "></div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.slice(0, 6).map((items) => (
            <ProductCard key={items.id} {...items} />
          ))
        }
      </section>
    </section>
  );
};

export default ProductSection;
