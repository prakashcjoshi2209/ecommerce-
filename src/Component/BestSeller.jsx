import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Title } from "./Title";
import { Productitem } from "./Productitem";

export const BestSeller = () => {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((data) => data.bestseller);

    setbestSeller(bestProduct.slice(6,11));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        These are the qualities a good functional jacket should have. Whether it's a city trip or an upcoming hiking vacation, a good functional jacket is so versatile that it can accompany you on any of these adventures.
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
