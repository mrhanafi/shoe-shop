import React from "react";

function Card({ item }) {
  return (
    <div
      className={`${item.className} cursor-pointer transform transition hover:scale-105 max-w-xl`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">
          SHOP NOW +
        </div>
      </div>
      <img
        src={item.src}
        alt=""
        className="absolute top-5 left-[40%] h-40 w-56"
      />
    </div>
  );
}

export default Card;
