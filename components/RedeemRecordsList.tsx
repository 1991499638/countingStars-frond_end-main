import React from "react";
import Link from 'next/link';
import QueryRecords from "./QueryRecords";

interface Props {
    recordsList: any;
  }
  
function RecordsList({ recordsList }: Props) {
    return (
        <div className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 md:flex  md:flex-wrap md:justify-between">
            
            {recordsList.map((queryRecord: queryRecords) => (
               <QueryRecords records={queryRecord}/>
            ))}
        </div>
    )
}
export default RecordsList;