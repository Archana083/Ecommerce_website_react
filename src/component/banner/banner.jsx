import React from 'react'


export const Banner1 = () => {
    return(
        <>
             <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div
          role="alert"
          className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex"
        >
          <div className=" mr-12">
            <p className="font-bold text-black">
              🌟 Black Friday Sale
              <span className="text-white">
                - Up to 50% off on fashion items!
              </span>
              <span
                title=""
                className="inline-flex items-center justify-center text-sm font-bold text-yellow-300 transition-all ml-4 duration-200 rounded-md hover:text-gray-700"
                role="button"
              >
                Get Now{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </p>
          </div>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 !absolute top-3 right-3"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        role="alert"
        className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white flex"
        style={{ opacity: 1 }}
      >
        <div className="shrink-0">🎁</div>
        <div className="ml-3 mr-12">
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium">
            Black Friday Special Offers:
          </p>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>Massive discounts up to 70% off!</li>
            <li>
              Exclusive deals on electronics, fashion, home goods, and more!
            </li>
            <li>Free shipping on orders over $50.</li>
            <a
              href="#"
              className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-red-600 text-white rounded-l-lg"
            >
              <p className="text-sm font-bold">
                Shop Now - Limited Time Offer!
              </p>
            </a>
          </ul>
        </div>
      </div>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="image"
              className="object-cover w-full h-full"
            />
            {/* Black Friday Mega Offer */}
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
              <h2 className="text-4xl font-bold text-center">
                {" "}
                Black Friday <br />
                <span className="text-red-500"> 50% Off</span>
              </h2>
            </div>
            {/* End Black Friday Mega Offer */}
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-500 uppercase">
              Startups
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>
            <a className="inline-block" href="#">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
        </>
    )
}

const banner = () => {
  return (
    <div>
        <>
  {/* component */}
  <div className="flex items-center justify-center">
    <div>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div
          role="alert"
          className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white flex"
        >
          <div className=" mr-12">
            <p className="font-bold text-red-500">
              Black Friday Sale
              <span className="text-red-300">
                - Up to 50% off on fashion items!
              </span>
              <span
                title=""
                className="inline-flex items-center justify-center text-sm font-bold text-red-500 transition-all ml-4 duration-200 rounded-md hover:text-red-700"
                role="button"
              >
                Get Now
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </p>
          </div>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 !absolute top-3 right-3"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
     
      
    </div>
  </div>
</>

    </div>
  )
}

export default banner
