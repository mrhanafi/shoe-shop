import React from "react";
import Card from "./Card";

function NewArrivalSection({ items }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/images/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card item={item} />
        ))}
      </div>
      {/* <Card item={items[0]} /> */}
    </div>
  );
}

export default NewArrivalSection;
