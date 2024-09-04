import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import bag1 from "../../assets/images/bag1.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import bag3 from "../../assets/images/bag3.jpg";
import bag4 from "../../assets/images/bag4.jpg";
import bag5 from "../../assets/images/bag5.jpg";
import { useLocation, useNavigate } from "react-router";

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
    
]


const ProductDetail = () => {
  const location = useLocation();
  const {product} = location.state || {};
  console.log(product)
  const [mainImage, setMainImage] = useState(product ? product.img : "");
  const navigate= useNavigate()

  const handleImageOrColorClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
    console.log(product);
    
  };
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>; // Optional: a loading state before redirection
  }

 const handleAddToCart = (product) =>{
    console.log('Product details:', { img: mainImage, price: product.price, name: product.name });
    navigate("/addtocart", { state: { product: { img: mainImage, price: product.price, name: product.name } } });
  
      }
      const handleWishList = () => {
        navigate('/wishlist')
      }
  const colorOptions = [
    {
      color: "bg-red-600",
      image: bag1,
    },
    {
      color: "bg-lightred",
      image:bag3 ,
       },
    {
      color: "bg-black",
      image: bag4,
    },
    {
      color: "bg-cream",
      image: bag5,
    },
    {
      color: "bg-gray-900",
      image: bag2,
    },
  ];

  return (
    <div className="bg-white py-8 mx-10 mt-10 border border-black">
      <div className=" mx-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">

        <div className="flex flex-col items-center md:mr-4 space-y-2">
            {colorOptions.map((option, index) => (
              <div
                key={index}
                className="w-20 h-20 cursor-pointer rounded-md overflow-hidden border border-gray-300"
                onClick={() => setMainImage(option.image)}
              >
                <img
                  src={option.image}
                  alt={option.color}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

               {/* Main Image */}
               <div className="flex-1">
            <div className="w-full h-[500px] rounded-md overflow-hidden relative">
              <img
                src={mainImage}
                alt="Main product"
                className="object-cover w-full h-full"
              />
              <div className="absolute w-30 h-30 bg-white bg-opacity-0 hover:bg-opacity-50 top-0 left-0 p-10">  </div>
            </div>

            <div className="flex mt-4 space-x-2">
              <button onClick={handleAddToCart} className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Add to Cart
              </button>
              <button onClick={handleWishList} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                Add to Wishlist
              </button>
            </div>
          </div>


          <div className="md:flex-1 px-4">
            <h2 className="font-bold text-gray-800 ">{product.name}</h2>
            <p className="text-gray-800 text-md mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              asperiores fugiat iusto inventore voluptas expedita ducimus ullam
              non maxime fugit.
            </p>
            <div className="flex mb-4">
              <div className="me-4">
                <span className="text-gray-900 font-bold mr-1">Price:</span>
                <span className="text-gray-600"> {product.price}</span>
              </div>

              <div>
                <span className="text-gray-900 font-bold mr-1">
                  Availability:
                </span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-bold"> Select Color:</span>
              <div className="flex mt-4">

              {colorOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`h-6 w-6 rounded-full ${option.color} mr-2`}
                    onClick={() => handleImageOrColorClick(option.image)}
                  ></button>
                ))}
                {/* <button className="w-6 h-6 rounded-full bg-gray-800  mr-2"></button>
                <button className="h-6 w-6 rounded-full bg-pink-600 mr-2"></button>
                <button className="h-6 w-6 rounded-full bg-blue-500 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-customGreen mr-2"></button> */}
              </div>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-bold"> Select Size:</span>
              <div className="flex mt-4">
                <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-950 font-bold  mr-2 hover:bg-gray-400">
                  S
                </button>
                <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-950 font-bold  mr-2 hover:bg-gray-400">
                  M
                </button>
                <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-950 font-bold  mr-2 hover:bg-gray-400">
                  L
                </button>
                <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-950 font-bold  mr-2 hover:bg-gray-400">
                  XL
                </button>
                <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-950 font-bold  mr-2 hover:bg-gray-400">
                  XXL
                </button>
              </div>
            </div>
            <div className="mb-5 ">
              <span className="font-bold ">Product Description:</span>
              <p className="text-gray-700 mt-3 leading-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                molestias eveniet, doloremque ducimus ab quis voluptatem iusto
                asperiores vitae est optio, unde aliquid laboriosam veniam
                tenetur laborum molestiae quae reiciendis fugit dolorem rerum
                nam! Quisquam et magni quasi cumque! Eligendi!
              </p>
            </div>
          </div>
        </div>

        <div className=" px-5 pb-10 ">
          <h2 className="text-xl text-gray-800 py-7 font-semibold border-b border-gray-300">
            Recent reviews
          </h2>
          <div className="flex lg:gap-52">
            <div className=" mt-10">
            
              <span className="font-semibold text-gray-700 pt-10 leading-7 whitespace-nowrap">
                Risako M
              </span>{" "}
              <br />
              <span className="text-gray-600 leading-7 whitespace-nowrap">
                May, 16 2022
              </span>
            </div>

            <div className="flex mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#faca0a"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#faca0a"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#faca0a"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#faca0a"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#faca0a"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <div className="mt-10 ">
              <span className="font-medium text-gray-800 text-sm">
                Can't say enough good things
              </span>
              <p className="font-normal text-gray-700 mt-5 text-sm">
                I was really pleased with the overall shopping experience. My
                order even included a little personal, handwritten note, which
                delighted me!
                <br />
                <br />
                The product quality is amazing, it looks and feel even better
                than I had anticipated. Brilliant stuff! I would gladly
                recommend this store to my friends. And, now that I think of
                it... I actually have, many times!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white  px-5  border-t border-gray-300">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
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
      </div>
    </div>
  );
};

export default ProductDetail;
