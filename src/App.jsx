import { useState } from "react";
import Badge from "./Badges/Badge";

function App() {
  const colors = ["red", "yellow"];

  return (
    <>
    <div className="all-badges">
      {colors.map((one) => (
        <div className="badges-div">
          <Badge variant="squared" color={one}>Badge</Badge>
          <Badge variant="rounded" color={one}>Badge</Badge>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
