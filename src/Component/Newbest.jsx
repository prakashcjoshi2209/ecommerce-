import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Title } from "./Title";
import { Productitem } from "./Productitem";

export const Newbest = () => {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((data) => data.bestseller);

    setbestSeller(bestProduct.slice(12,17));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"NEW"} text2={"ARRIVALS"} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Be the first to explore our latest additions! Fresh styles and products are just a click away.Be the trendsetter among your friends! Our New Arrivals section features the freshest styles and innovative products that just hit the shelves. Check back often—these items are in high demand and won’t last long!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-6 ">
        {
          bestSeller.map((data,index)=>(
          <Productitem key={index}
          id={data._id} image={data.image} 
          name={data.name}
          price={data.price}
          
          />
        ))}
      </div>
    </div>
  );
};
