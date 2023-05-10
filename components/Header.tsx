import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from '../redux/hooks';

function Header() {
  const jwt = useSelector((s) => s.user.token)
  const router = useRouter();
  const goUser = () => {
    router.push('/user');
  };

  return (
    <div className="min-[1px]:hidden md:z-50  md:flex md:items-center md:justify-between md:h-16 md:bg-slate-300 md:shadow-md">
      <div className="hover:translate-x-36 hover:transition-all hover:duration-[2s]">
        <div className=" ml-6  animate-in-left ">
          <Image src="/Logo2.jpg" width={100} height={65}></Image>
        </div>
      </div>
      <div className="flex space-x-16  animate-in-right mr-12  text-sm">
        <Link href="/">
          <div className="link">商城</div>
        </Link>
        <Link href="/store">
          <div className="link">藏品</div>
        </Link>
        {/* 根据登录状态显示不同操作页面 */}
        {
          jwt && jwt !== undefined ?
            <div className="flex items-center justify-center w-[20px]">
              <UserIcon className="headerIcon" onClick={goUser} />
            </div>
            :
            <Link href="/login">
              <div className="link">登录</div>
            </Link>
        }
      </div>
    </div>
  );
}

export default Header;
