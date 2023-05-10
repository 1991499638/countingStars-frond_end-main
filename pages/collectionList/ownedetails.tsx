import React, { useEffect, useState } from 'react';
import BackRouter from '../../components/BackRouter';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { useAppDispatch, useSelector } from '../../redux/hooks';
import { getCollectionDetail } from '../../redux/collectionDetail/slice';
import { SpinLoading, Input, Toast } from 'antd-mobile';
import Footer from '../../components/Footer';

function details() {
  const router = useRouter();
  const { Id } = router.query;
  const loading = useSelector((state) => state.collectionDetail.loading);
  const error = useSelector((state) => state.collectionDetail.error);
  const collection = useSelector((state) => state.collectionDetail.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(Id);
    dispatch(
      getCollectionDetail({
        collectionId: Id as string
      })
    );
  }, [Id]);

  if (loading) {
    return <SpinLoading />;
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <div>
      <Header />
      <div className="bg-[#35383C] min-h-screen">
        <BackRouter color="bg-[#35383C]" />
        <div
          className="mt-14 flex flex-col  items-center 
          md:mt-0
        "
        >
          <section
            className="flex h-fit w-[320px] flex-col space-y-3  p-8 mb-8 
          md:w-[400px] md:p-10 xl:w-[500px]  xl:mb-16"
          >
            <div
              className="relative h-64 flex justify-center w-full 
              hover:animate-tracking-in-expand
               hover:translate-y-10 hover:scale-125 hover:shadow-purple-500 hover:shadow-2xl hover:transition-all hover:duration-[3s]
              md:w-[260px] md:mx-auto
              shadow-xl shadow-amber-300
              border-2 border-l-red-400 border-t-orange-400 border-r-yellow-500 border-b-green-400
            "
            >
              <Image
                src={collection.Picture}
                width={256}
                height={256}
                alt={collection.Name}
                className=""
              />
            </div>
            <div className="flex flex-col flex-1 items-center justify-start text-white">
              <div className="mt-4 text-2xl text-red-700">
                {collection.Name}
              </div>
              <div>
                <div className="mb-2 flex items-center text-xl text-gray-400 justify-between  opacity-75 ">
                </div>
                <p className="text-sm  opacity-75 hover:text-violet-400">
                  发售时间: {collection.StartTime}
                </p>
                <p className="mt-1 text-sm  opacity-75 hover:text-cyan-400">
                  终止时间: {collection.StopTime}
                </p>
              </div>
            </div>
          </section>

          <section className=" flex flex-col justify-center items-center">
            <h1 className="text-red-700 text-2xl text-center mb-4">作品故事</h1>
            <div className="w-4/5 md:w-1/2">
              <p className=" text-purple-200 hover:text-blue-600 font-medium opacity-75 tracking-widest leading-10 indent-6 break-all">
                {collection.Desc}
                {/* 敦煌在历史上,是佛教传入汉朝的第一站,这也是记载中佛教第一次东传,后在魏晋时期开始逐渐有西域的僧侣来到敦煌,在岩壁上开凿洞窟,在洞窟内进行壁画创作和泥塑佛雕,向当地人民宣扬佛教教义,吸引信徒。
                敦煌在北魏时期进入鼎盛期,在当时信奉佛教的皇室支持下,莫高窟中有着比以往要多得多的工匠画师进行创作,这些作品风格融汇中西方的艺术特点,给后世留下了诸多艺术珍品 */}
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default details;
