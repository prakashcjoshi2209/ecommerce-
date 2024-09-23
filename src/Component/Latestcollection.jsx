import React, { useContext, useEffect, useState } from "react";

import ShopcontextProvider, { Shopcontext } from "../context/Shopcontext";

import { BestSeller } from "./BestSeller";

import { Title } from "./Title";
import { Productitem } from "./Productitem";

export const Latestcollection = () => {
  const { products } = useContext(Shopcontext);

  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(() => {
    setlatestProducts(products.slice(10, 20));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"TRENDING"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        There are a lot of warm benefits that a jacket provides us with particularly when we need to keep it stylish as well as protect ourselves from the cold. Jackets are a must for everyone's wardrobe. You need to have at least two to three varieties of jackets with you which you can wear during the winter months.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((data, index) => (
          <Productitem
            key={index}
            id={data._id}
            image={data.image}
            name={data.name}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};
