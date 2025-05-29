import { useState } from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10 xl:px-24">
        <Nav />
        <ShoeDetails />
      </div>
    </>
  );
}

export default App;
