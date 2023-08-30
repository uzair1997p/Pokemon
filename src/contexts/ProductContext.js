import React, {createContext, useState, useEffect} from
'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products state
  const apiKey = process.env.REACT_APP_API_KEY
  const [products, setProducts] = useState([]);
  const headers = {
    "X-Authorization": apiKey,
    "Accept": "application/json",
    "Content-Type": "application/json",
  };


  //fetch Products
  useEffect(()=> {
    const fetchProducts= async () => {
      const response = await fetch("https://api.chec.io/v1/products?limit=40", {
        method: 'GET',
        headers: headers,
        });

        const data = await response.json();
        setProducts(data.data)
    };
    fetchProducts();
  }, [])

  return <ProductContext.Provider value = {{products}}> {children} </ProductContext.Provider>;
};

export default ProductProvider;
