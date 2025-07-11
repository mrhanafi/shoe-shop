import { useState } from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import Card from "./components/Card";
import { SHOE_LIST } from "./constant";
import NewArrivalSection from "./components/NewArrivalSection";
import Sidebar from "./components/Sidebar";
import CartItem from "./components/CartItem";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="animate-fadeIn p-10 xl:px-24">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
        <ShoeDetails />
        <NewArrivalSection items={SHOE_LIST} />
        <Sidebar
          isOpen={isSidebarOpen}
          onClickClose={() => setIsSidebarOpen(false)}
        >
          <h2 className="text-2xl font-bold mb-10">Cart</h2>
          <CartItem item={SHOE_LIST[0]} />
          <CartItem item={SHOE_LIST[1]} />
          <CartItem item={SHOE_LIST[2]} />
        </Sidebar>
      </div>
    </>
  );
}

export default App;
