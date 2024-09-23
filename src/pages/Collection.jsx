import React, { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";

export const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showFilter, setshowFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter portion */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>

        {/* category filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6  ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
             <input className="w-3 " type="checkbox" value={'Men'} /> Men
             <input className="w-3 " type="checkbox" value={'Women'} /> Women
             <input className="w-3 " type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>
        {/* subcategories filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5  ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
             <input className="w-3 " type="checkbox" value={'Topwear'} /> Topwear
             <input className="w-3 " type="checkbox" value={'Bottomwear'} /> Bottomwear
             <input className="w-3 " type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};
