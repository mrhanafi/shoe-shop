import { useState } from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="animate-fadeIn p-10 xl:px-24">
        {/* <Nav />
        <ShoeDetails /> */}
        <Card />
      </div>
    </>
  );
}

export default App;
