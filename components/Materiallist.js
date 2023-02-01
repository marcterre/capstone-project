import { useState } from "react";

export default function Materiallist() {
  const [showAddNewDimensions, setShowAddNewDimensions] = useState(false);
  return (
    <>
      <h2>Materiallist</h2>
      <button onClick={() => setShowAddNewDimensions(!showAddNewDimensions)}>
        {showAddNewDimensions ? "click to fold" : "add new dimensions"}
      </button>
      {showAddNewDimensions ? (
        <form>
          <label htmlFor="name">name:</label>
        </form>
      ) : null}
    </>
  );
}
