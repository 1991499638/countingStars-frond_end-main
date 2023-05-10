import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Landing from '../components/Landing';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, useAppDispatch } from '../redux/hooks';
import {
  getCollectionList,
  recommendCollectionSlice,
} from '../redux/recommendCollections/slice';
import {
  searchCollections,
  searchCollectionSlice,
} from '../redux/searchCollections/slice';
import { SpinLoading, Input, Toast } from 'antd-mobile';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import CollectionList from '../components/RecommendCollectionList';

const Home: NextPage = () => {
  const router = useRouter();
  const loading = useSelector((state) => state.recommentCollections.loading);
  const error = useSelector((state) => state.recommentCollections.error);
  const collectionList = useSelector(
    (state) => state.recommentCollections.data,
  );
  const data = useSelector((s) => s.searchCollections.data);
  const [name, setName] = useState<string>('');

  const [changed, setChanged] = useState(0);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCollectionList());
  }, []);
  useEffect(() => {
    dispatch(
      searchCollections({
        name: name,
      }),
    );
    // 这里输完后需要重新更新，否则下一次搜索成功的内容是上一次成功的内容
  }, [changed]);
  const goSearch = () => {
    if (name == '') {
      Toast.show({
        content: '请输入搜索名称',
      });
    } else {
      dispatch(
        searchCollections({
          name: name,
        }),
      );
      localStorage.setItem('data', data);
      router.push('/search');
      dispatch(searchCollectionSlice.actions.goSearch());
      setChanged(1);
    }
  };

  if (loading) {
    return <SpinLoading />;
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }

  return (
    <div className="  bg-opacity-80">
      <Head>
        <title>Counting Star</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-center">
        <header className="fixed  z-10 mt-2 animate-tracking-in-contract-bck-top text-2xl  uppercase bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent md:hidden">
          Counting Star
        </header>
      </div>

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-10 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            藏品列表
          </h1>
        </div>
        {/*className="focus:ring-2 focus:bg-[#1B1B1B] opacity-30 focus:opacity-50  focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900  rounded-md py-2 pl-10 ring-1 bg-[#1B1B1B] shadow-sm"  */}
        <div className="w-3/4 mx-auto flex flex-auto space-x-4">
          <Input
            className=" border rounded-md focus:border border-gray-400 focus:ring-2 font-thin opacity-50"
            placeholder="请输入藏品名称"
            value={name}
            onChange={(val) => {
              setName(val);
            }}
          />
          <button
            className="px-4 py-2 md:px-6 bg-violet-500 bg-clip-text  border-2 border-gray-800 text-gray-800  text-xs leading-tight rounded hover:bg-black hover:bg-opacity-25 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={goSearch}
          >
            Search
          </button>
        </div>
        <CollectionList collectionList={collectionList} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
