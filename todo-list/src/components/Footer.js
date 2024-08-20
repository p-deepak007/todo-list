import React from "react";
const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Hello, Context!");
  
    return (
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    );
  };
  


