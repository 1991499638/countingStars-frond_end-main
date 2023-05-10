import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import BackRouter from '../../components/BackRouter';
import Image from 'next/image';
import formatTime from '../../utils/FormateTime';
import ReceiveFooter from '../../components/ReceiveFooter';
import {
  collectionDetailSlice,
  getCollectionDetail,
} from '../../redux/collectionDetail/slice';
import { useSelector, useAppDispatch } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { SpinLoading } from 'antd-mobile';
import { collectionList, selectCatByid } from '../../service/api';

interface props {
  collection: collection;
}

function Page({ collection }: props) {
  // const loading = useSelector((state) => state.collectionDetail.loading);
  // const collection = useSelector((state) => state.collectionDetail.data);
  // const error = useSelector((state) => state.collectionDetail.error);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (collectionId) {
  //     dispatch(getCollectionDetail(collectionId));
  //   }
  // }, []);
  // if (loading) {
  //   return (
  //     <SpinLoading
  //       style={{
  //       }}
  //     />
  //   );
  // }
  // if (error) {
  //   return <div>网站出错：{error}</div>;
  // }
  return (
    <div className="bg-[#35383C]">
      <BackRouter color="bg-[#35383C]" />
      <div className="mt-14 flex justify-center ">
        <div
          className=" flex h-fit w-[320px] flex-col space-y-3  p-4 mb-8 
    md:h-[500px]  md:w-[400px] md:p-10 xl:w-[500px] xl:h-[600px] xl:mb-16"
        >
          <div className="relative h-64 w-full md:h-72">
            <Image
              src={collection.Picture}
              layout="fill"
              objectFit="contain"
              alt={collection.Name}
            />
          </div>
          <div className="flex flex-1 items-center  justify-start space-x-3">
            <div className="space-y-2 text-base text-white md:text-2xl">
              <div className=" text-2xl text-red-700">{collection.Name}</div>
              <div>
                <div className=" flex items-center justify-between ">
                  <p>{collection.Designer}</p>
                  <span className="ml-2 text-xs text-red-600">
                    剩余{collection.Remainder}份
                  </span>
                </div>
                <p>发售时间: {formatTime(collection.StartTime)}</p>
                <p>终止时间: {formatTime(collection.StopTime)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-red-700 text-2xl text-center mb-4">作品故事</h1>
        <div className="w-4/5">
          <p className=" text-purple-200 hover:text-blue-600 font-medium opacity-75 tracking-widest leading-10 indent-6">
            {collection.Desc}
            敦煌在历史上,是佛教传入汉朝的第一站,这也是记载中佛教第一次东传,后在魏晋时期开始逐渐有西域的僧侣来到敦煌,在岩壁上开凿洞窟,在洞窟内进行壁画创作和泥塑佛雕,向当地人民宣扬佛教教义,吸引信徒。
            敦煌在北魏时期进入鼎盛期,在当时信奉佛教的皇室支持下,莫高窟中有着比以往要多得多的工匠画师进行创作,这些作品风格融汇中西方的艺术特点,给后世留下了诸多艺术珍品
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-white text-2xl text-center mt-10 mb-4 opacity-75">
          领取须知
        </h1>
        <div className="w-4/5">
          <p className=" text-slate-400  font-medium opacity-75 tracking-widest leading-6">
            “数星星"在保护艺术作品数字版权的基础上，实现真实可信的数字与实体艺术品的发行、收藏和使用。
            <p>(1) 仅限实名认证为年满18周岁的成都信息工程大学用户领取。</p>
            <p>
              (2)
              艺术作品的版权由艺术家或艺术机构所有，用户除获得版权方的书面同意以外，不得将艺术品用于任何商业用途，包括但不限于出售艺术作品的副本、使用权、衍生作品
            </p>
            <p>
              (3)
              请勿对艺术作品进行炒作、场外交易、欺诈，或以任何其他非法方式进行使用。
            </p>
          </p>
        </div>
      </div>
      <ReceiveFooter />
    </div>
  );
}

export default Page;

// 服务端没有 localStorage 用不了高级方法
// export async function getStaticPaths() {
//   const res = await collectionList();
//   const stars = res.data;

//   return {
//     paths: stars.map((star: collection) => ({
//       params: {
//         id: star.KindId,
//       },
//     })),
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const res = await selectCatByid(params.id);

//   const collection = res.data;

//   return {
//     props: { collection },
//   };
// };
