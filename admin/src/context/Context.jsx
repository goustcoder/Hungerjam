import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [food_list, set_food_list] = useState([]);
  const [customer, setCustomer] = useState([]);
  const url = import.meta.env.VITE_API_URL;


  const fetchFoodList = async () => {
    try {
      const res = await axios.get(url + "/api/food/list");
      if (res?.data) {
        console.log("Fetched Food List: ", res.data.data);
        set_food_list(res.data.data); // Update the food_list state
        console.log("data :", food_list);
      }
    } catch (error) {
      console.error("Error fetching food list: ", error.message);
    }
  };

  const fetchCustomer = async () => {
    try {
      const res = await axios.get(url + "/api/user/data");
     
      setCustomer(res.data.data);
    } catch (error) {
      console.error("Error fetching user list: ", error.message);
    }
  };

  useEffect(() => {
    fetchFoodList();
    fetchCustomer();
  }, []);

  const contextValue = {
    food_list,
    url,
    fetchFoodList,
    customer,
    setCustomer,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
