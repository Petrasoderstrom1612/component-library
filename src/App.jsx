import { useState } from "react";
import Badge from "./Badges/Badge";

function App() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple"];

  return (
    <>
    <h1 className="h1-badges">Badges</h1>
    <div className="all-badges">
      <div className="badges-h2-div">
      <h2 className="h2-badge">Square</h2>
      <h2 className="h2-badge">Pill</h2>
      </div>
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
