import Footer from '../components/Footer';
import React from 'react';
import { SpinLoading, Toast } from 'antd-mobile';
import Header from '../components/Header';
import BackRouter from '../components/BackRouter';
import CollectionList from '../components/RecommendCollectionList';
import { useSelector, useAppDispatch } from '../redux/hooks';
import {
  searchCollectionSlice,
  searchCollections,
} from '../redux/searchCollections/slice';

function Search() {
  const loading = useSelector((state) => state.searchCollections.loading);
    const error = useSelector((state) => state.searchCollections.error);
    const collection = useSelector((s) => s.searchCollections.data);
    const collectionList = [];
    collectionList.push(collection);

    const data = useSelector((s) => s.searchCollections.data);
    const dispatch = useAppDispatch();
    if (loading) {
        return <SpinLoading />;
    }
    if (error) {
        return <div>网站出错：{error}</div>;
    }
    return (
        <div className="  bg-opacity-80">
            <Header />
            <div className="flex justify-center">
            </div>
            <main className="relative h-[200vh] bg-[#E7ECEE]">
                <div className="space-y-10 py-16">
                    <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                        搜索结果
                    </h1>
                </div>
                {data == null ?
                    <div></div>
                    : <CollectionList collectionList={collectionList} /> 
                    }
      </main>
      <Footer />
    </div>
  );
}

export default Search;
