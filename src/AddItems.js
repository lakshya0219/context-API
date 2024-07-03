import React, { useContext, useState } from "react";
import { SendContext } from "./context/ContextApi";
import ShowItems from "./ShowItems";
const AddItems = () => {
  const newItem = useContext(SendContext);
  const [val, setVal] = useState("");
  function handleOnChange(event) {
    event.preventDefault();
    setVal(event.target.value);
  }
  function handleOnClick(event) {
    // event.preventDefault();
    newItem.setItems([...newItem.items, val]);
    setVal("");
  }
  return (
    <>
      <label> Items List</label>
      <input
        type="text"
        placeholder="enter items"
        value={val}
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={(e) => handleOnClick(e)}>Add this</button>
      <ShowItems />
    </>
  );
};
export default AddItems;
