import React, { useContext } from "react";
import { SendContext } from "./context/ContextApi";

export default ShowItems = () => {
  const display = useContext(SendContext);
  return <>{display.items && display.items.map((works) => <li>{works}</li>)}</>;
};
