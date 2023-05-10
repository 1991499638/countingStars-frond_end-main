import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Store from '../components/Store';
import {
  getOwnedCollection,
  ownedCollectionSlice,
} from '../redux/ownedCollections/slice';
import { useAppDispatch, useSelector } from '../redux/hooks';
import { SpinLoading } from 'antd-mobile';
import Header from '../components/Header';

export default function store() {
  const loading = useSelector((state) => state.ownedCollections.loading);
  const error = useSelector((state) => state.ownedCollections.error);
  const ownedCollections = useSelector((state) => state.ownedCollections.data);
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOwnedCollection());
  }, [jwt]);
  if (loading) {
    return <SpinLoading />;
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <div className="mb-16 md:mb-0">
      <Header />

      <div className="min-h-screen w-full  overflow-hidden bg-[#1B1B1B]">
        <div className="sticky top-0 text-center m-2 md:hidden">
          <h1 className="text-xl text-violet-500">我的藏品</h1>
        </div>
        <div
          className="mt-2 md:mt-1 grid grid-cols-2 gap-x-4 mx-2 md:grid-cols-3 md:mx-16 md:gap-x-8
       lg:grid-cols-4 lg:mx-40 lg:gap-x-12 lg:gap-y-6"
        >
          {ownedCollections.map((collection: ownedCollection) => (
            <Store product={collection} key={collection.Id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
