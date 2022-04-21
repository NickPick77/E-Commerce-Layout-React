import { Product } from "./product";
import { useState, useEffect } from "react";

const defaultStatus = [
  {
    title: "in caricamento...",
    price: "...."
  }

]

export const List = () => {
  
  const [productInfo, setProductInfo] = useState(defaultStatus)

  const getProductData = async () => {

    const response = await fetch("https://fakestoreapi.com/products");

    const productData = await response.json();

    console.log(productData)

    setProductInfo(productData)
  }

  useEffect(  () => {

    getProductData()

  }, [])

  return (
    <section>
      <ul className="grid">
        {productInfo.map((item, index) => 
          (
          <li key={index}>
            <Product image={item.image} title={item.title} description={item.description} price={item.price} alt="product Image" />
          </li>
        ))}
      </ul>
    </section>
  );
};
