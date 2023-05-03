import { createContext, useContext, useReducer } from "react";
import { data } from "../App";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const handleAllFilterReducer = (allFilters, { type, value }) => {
    switch (type) {
      case "SEARCH":
        return { ...allFilters, search: value };
      case "SORT":
        return { ...allFilters, sort: value };
      case "FILTERS":
        return {
          ...allFilters,
          filters: allFilters?.filters?.includes(value)
            ? allFilters?.filters?.filter((filter) => filter !== value)
            : [...allFilters?.filters, value],
        };
      default:
        return allFilters;
    }
  };

  const [allFilters, setAllFilters] = useReducer(handleAllFilterReducer, {
    search: "",
    sort: null,
    filters: ["inStock"],
  });

  const searchFilteredProducts =
    allFilters?.search?.length > 0
      ? data?.filter(({ name }) =>
          name?.toLowerCase()?.includes(allFilters?.search?.toLowerCase())
        )
      : data;

  const radioFilteredProducts = allFilters?.sort
    ? searchFilteredProducts?.sort((prod1, prod2) =>
        allFilters?.sort === "HTL"
          ? prod2.price - prod1.price
          : prod1.price - prod2.price
      )
    : searchFilteredProducts;

  const checkboxFilteredProducts =
    allFilters?.filters?.length > 0
      ? radioFilteredProducts?.filter((product) =>
          allFilters?.filters?.every((filter) => product[filter])
        )
      : radioFilteredProducts;

  return (
    <ProductContext.Provider
      value={{
        setAllFilters,
        checkboxFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
