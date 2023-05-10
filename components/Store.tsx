import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: ownedCollection;
}

function Store({ product }: Props) {
  return (
    <div
      className=" border mb-6 bg-[#35383C]
     shadow-2xl shadow-slate-500  border-l-red-300 border-t-orange-300 border-r-yellow-300 border-b-green-300  
    hover:border-4 hover:shadow-purple-400 hover:shadow-2xl hover:border-l-green-300 hover:border-b-yellow-300 hover:border-t-red-300 hover:border-r-orange-300
    "
    >
      <div
        className="relative mt-2 md:mt-4 flex justify-center h-[150px] w-full
      hover:scale-110 hover:translate-y-4 hover:transition-all hover:duration-[3s] hover:shadow-violet-500
      "
      >
        <Image
          src={product.Picture}
          width={155}
          height={150}
          alt={product.Name}
        />
      </div>
      <div className="text-sm text-center  md:text-base">
        <p className="mt-2 text-white opacity-75">{product.Name}</p>
        <p className="text-xs mt-1 mb-1 text-amber-500">{product.Id}</p>
      </div>

      <div className=" relative">
        <div className=" absolute right-1 bottom-1">
          <Link href={`/collectionList/ownedetails?Id=${product.Id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-blue-300 "
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
  );
}

export default Store;
