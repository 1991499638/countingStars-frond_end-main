import React from 'react';
// import Image from 'next/image';
import { Image } from 'antd-mobile';
import Link from 'next/link';

interface Props {
  product: collection;
}

function Product({ product }: Props) {
  return (
    <div
      className="flex h-fit w-[324px] flex-col space-y-3 bg-[#35383C] shadow-md shadow-slate-500  p-8 mb-8 
    md:h-[450px]  md:w-[350px] md:p-10 md:shadow-2xl md:shadow-slate-500 md:border-2 md:border-l-red-300 md:border-t-orange-300 md:border-r-yellow-300 md:border-b-green-300  
    md:hover:border-4 md:hover:shadow-purple-400 md:hover:shadow-2xl md:hover:border-l-green-300 md:hover:md:border-b-yellow-300 md:hover:border-t-red-300 md:hover:border-r-orange-300
    xl:w-[500px] xl:h-[600px] xl:mb-16"
    >
      <div className="relative border-2 border-l-red-400 border-t-orange-400 border-r-yellow-500 border-b-green-400 md:border-hidden md:h-72 hover:shadow-violet-500 hover:shadow-xl  hover:scale-110 hover:translate-y-2 hover:transition-all ">
        <Image
          src={product.Picture}
          width={256}
          height={256}
          alt={product.Name}
          className="mx-auto"
        />
      </div>
      <div className=" relative flex flex-1 items-center justify-center space-x-3">
        <div className=" space-y-2 text-xl tracking-widest text-white opacity-75 md:text-2xl">
          <p className="opacity-90 mb-1 text-amber-500 hover:text-black">
            {product.Name}
          </p>
          <p className=" opacity-90 hover:text-blue-400">{product.Designer}</p>
          <p className=" text-sky-500 hover:text-purple-500 hover:opacity-75  opacity-75">
            限量{product.Total}份
          </p>
          <div className=" absolute right-0 bottom-0">
            <Link href={`/collectionList/details?KindId=${product.KindId}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
