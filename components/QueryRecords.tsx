import React from "react";
import {Image} from "antd-mobile";

interface Props {
    records: queryRecords;
  }

function QueryRecords({ records }: Props){
    return(
        <div className="flex flex-auto  items-center justify-around w-full">
        <div className=" relative w-[150px] h-[200px]">
          <Image
            src={records.Picture}
            width={150}
            height={150}
            alt="Avatar"
            className="mt-[25px]"
          />
        </div>
        <div className="w-[200px]">
          <div className="border p-1 text-lg text-center font-medium mb-2">
            <p>{records.Name}</p>
          </div>
          <div className=" text-lg">
            <div>
              <p className="break-all text-xs">
                <span className="text-sm">链上地址:</span>
                {records.Hash}
              </p>
              <p className="break-all text-xs">
                <span className="text-sm">领取时间:</span>
                {records.Time}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default QueryRecords;