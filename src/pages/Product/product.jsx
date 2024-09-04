import React from "react";
import ProductCard from "../../component/Product/ProductCard";
import { useNavigate } from "react-router";
import bag1 from "../../assets/images/bag1.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import bag3 from "../../assets/images/bag3.jpg";
import bag4 from "../../assets/images/bag4.jpg";
import bag5 from "../../assets/images/bag5.jpg";
import bag6 from "../../assets/images/bag6.jpg";
import bag7 from "../../assets/images/bag7.jpg";
import bag8 from "../../assets/images/bag8.jpg";
import Pagination4 from "../../component/Pagination";


const products=[
  
  {
    "id": 1,
    "img": bag1,
    "name": "Product 1",
    "price": "$29.99"
  },
  {
    "id": 2,
    "img": bag2,
    "name": "Product 2",
    "price": "$39.99"
  },
  {
    "id": 3,
    "img": bag3,
    "name": "Product 2",
    "price": "$39.99"
  },
  
  {
    "id": 4,
    "img": bag4,
    "name": "Product 2",
    "price": "$39.99"
  },
  {
    "id": 5,
    "img": bag5,
    "name": "Product 2",
    "price": "$39.99"
  },
  
  {
    "id": 6,
    "img": bag6,
    "name": "Product 2",
    "price": "$39.99"
  },
  
  {
    "id": 7,
    "img": bag7,
    "name": "Product 2",
    "price": "$39.99"
  },
  {
    "id": 8,
    "img": bag8,
    "name": "Product 2",
    "price": "$39.99"
  },

]

const Product = () => {
  const navigate = useNavigate();
  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <>
    <div className="bg-white  px-5  border-t border-gray-300">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight ps-3 border-l-4 border-blue-500 text-gray-900">
          Our Product
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            onCardClick={() => handleCardClick(product)}
            />
        ))}
        </div>
      </div>
    </div>
    <Pagination4/>
    </>
  );
};

export default Product;
