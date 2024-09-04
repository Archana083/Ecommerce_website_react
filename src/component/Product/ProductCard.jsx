import React, { useState } from 'react';

const ProductCard = ({onCardClick, img, name, price}) => {
  const [isFavourite, setIsFavourite] =useState(false)
  const handleFavourite = (e) => {
    e.stopPropagation();
  setIsFavourite(!isFavourite)
  }


  return (
    <div className="group relative" onClick={onCardClick}>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={img}
        alt="Front of men's Basic Tee in black."
        className="w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className='absolute top-6 left-4'>
    <div className="heart-icon-wrapper" onClick={handleFavourite}>
          {isFavourite ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          )}
        </div>

    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a>
            <span aria-hidden="true" className="absolute inset-0" />
          {name}
          </a>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{price}</p>
    </div>
  </div>

   

  )
}

export default ProductCard

