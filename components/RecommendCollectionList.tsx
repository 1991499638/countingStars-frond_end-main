import React from "react";
import Link from 'next/link';
import Product from "./Product";

interface Props {
    collectionList: any;
  }
  
function CollectionList({ collectionList }: Props) {
    return (
        <div className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 md:flex  md:flex-wrap md:justify-between">
            {collectionList.map((collection: collection) => (
                <Link href={`/collectionList/details?KindId=${collection.KindId}`}>
                    <Product product={collection} key={collection.KindId} />
                </Link>
            ))}
        </div>
    )
}
export default CollectionList;