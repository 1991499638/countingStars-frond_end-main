import React from 'react';
import { useRouter } from 'next/router';

interface props {
  color?: string;
}

function BackRouter({ color }: props) {
  const router = useRouter();

  const click = () => {
    router.back();
  };
  return (
    <div
      className={`fixed top-0 md:hidden flex w-full items-center ${
        color ? color : `bg-[#E7ECEE]`
      }  justify-start  p-4`}
    >
      <svg
        onClick={() => click()}
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

export default BackRouter;
