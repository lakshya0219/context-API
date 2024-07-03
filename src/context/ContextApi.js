import { createContext, useState } from "react";
export const SendContext = createContext(null);

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <SendContext.Provider value={{ items, setItems }}>
      {props.children}
    </SendContext.Provider>
  );
};
