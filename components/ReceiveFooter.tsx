import React from 'react';

interface props {
  onclick?: () => void;
}

function ReceiveFooter({ onclick }: props) {
  return (
    <footer className=" sticky bottom-0 flex w-full items-center justify-center bg-[#38393b] p-4">
      <div className="flex items-center justify-evenly w-[340px] md:w-[760px]">
        <button
          className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
          onClick={onclick}
        >
          领取
        </button>
      </div>
    </footer>
  );
}

export default ReceiveFooter;
