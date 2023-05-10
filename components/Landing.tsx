import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block animate-tracking-in-expand bg-gradient-to-r from-violet-900 to-sky-500 bg-clip-text text-transparent">
            数星星数藏
          </span>
          <span className=" animate-tracking-in-contract-bck block text-lg">
            区块链产业学院
          </span>
          <span className="animate-tracking-in-contract-bck block text-xl">
            科技金融中心
          </span>
        </h1>

        <div className="animate-tracking-in-contract-bck-bottom">
          <a
            href="https://qkl.cuit.edu.cn/xygk/xyjj.htm"
            className="link before:bg-violet-600"
          >
            了解 更多
          </a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[578px] lg:w-[600px]">
        <Image src="/land.jpg" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
}

export default Landing;
