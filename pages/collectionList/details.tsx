import React, { useEffect, useState } from 'react';
import BackRouter from '../../components/BackRouter';
import Image from 'next/image';
import ReceiveFooter from '../../components/ReceiveFooter';
import { useRouter } from 'next/router';
import { selectCatByid } from '../../service/api';
import Header from '../../components/Header';

// interface props {
//   collection: collection;
// }

function details() {
  let star: collection = {
    KindId: '',
    Desc: '',
    Designer: '',
    Name: '',
    Picture: '',
    Remainder: 0,
    StartTime: '',
    StopTime: '',
    Total: 0,
  };

  const [collection, setCollection] = useState<collection>(star);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      // router.query.lang is defined
      const { KindId } = router.query;

      if (KindId !== undefined) {
        (async () => {
          let res = await selectCatByid({
            kind_id: KindId as string,
          });
          setCollection(res.data.data);
        })();
      }
    }
  }, [router]);

  return (
    <div>
      <Header />
      <div className="bg-[#35383C]">
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
                  <p className=" hover:text-amber-400">{collection.Designer}</p>
                  <span className="ml-2 text-xs text-red-600">
                    剩余{collection.Remainder}份
                  </span>
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

          <section className=" flex flex-col justify-center items-center">
            <h1 className=" text-white text-2xl text-center mt-10 mb-4 opacity-75">
              领取须知
            </h1>
            <div className="w-4/5 md:w-1/2">
              <p className=" text-slate-400  font-medium opacity-75 tracking-widest leading-6">
                “数星星"在保护艺术作品数字版权的基础上，实现真实可信的数字与实体艺术品的发行、收藏和使用。
                <p>(1) 仅限实名认证为年满18周岁的成都信息工程大学用户领取。</p>
                <p>
                  (2)
                  艺术作品的版权由艺术家或艺术机构所有，用户除获得版权方的书面同意以外，不得将艺术品用于任何商业用途，包括但不限于出售艺术作品的副本、使用权、衍生作品。
                </p>
                <p>
                  (3)
                  请勿对艺术作品进行炒作、场外交易、欺诈，或以任何其他非法方式进行使用。
                </p>
              </p>
            </div>
          </section>
        </div>

        <ReceiveFooter />
      </div>
    </div>
  );
}

export default details;
