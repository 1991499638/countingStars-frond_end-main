import React, { useEffect } from 'react';
import BackRouter from '../../../components/BackRouter';
import Image from 'next/image';
import RightIcon from '../../../components/RightIcon';
import Link from 'next/link';
import { userInfoSlice, getUserInfo } from '../../../redux/user/slice';
import { useAppDispatch, useSelector } from '../../../redux/hooks';
import { SpinLoading } from 'antd-mobile';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Header from '../../../components/Header';
import { Button } from 'antd-mobile';

function index() {
  const loading = useSelector((state) => state.userInfo.loading);
  const error = useSelector((state) => state.userInfo.error);
  const userInfo: userInfoReq = useSelector((state) => state.userInfo.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  if (loading) {
    return <SpinLoading />;
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <div>
      <BackRouter />
      <Header />
      <div className="mt-14 flex flex-col items-center justify-center  border-1 shadow-sm md:w-3/5 md:min-h-screen md:p-8  md:mx-auto md:mt-0 md:shadow-red-300 md:shadow-2xl md:border-2  ">
        <div className="settingDiv1 md:mt-0">
          <span className="pl-4">头像</span>

          <div className="relative col-span-2 flex justify-center">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={userInfo.Picture}
            />
          </div>
          <Link href="/user/setting/changeAvatar">
            <ChevronRightIcon className="w-6  absolute right-4 cursor-pointer  hover:scale-125 hover:-translate-y-1 transition-all hover:opacity-75" />
          </Link>
        </div>
        <div className="settingDiv1">
          <span className="pl-4">昵称</span>
          <div className="col-span-2 text-center">{userInfo.NickName}</div>
          <Link href="/user/setting/changeName">
            <ChevronRightIcon className="w-6 absolute right-4 cursor-pointer  hover:scale-125 hover:-translate-y-1 transition-all hover:opacity-75" />
          </Link>
        </div>
        <div className="settingDiv1">
          <span className="pl-4">手机号码</span>
          <div className="col-span-2 text-center">{userInfo.Phone}</div>
          <Link href="/user/setting/changePhone">
            <ChevronRightIcon className="w-6 absolute right-4 cursor-pointer  hover:scale-125 hover:-translate-y-1 transition-all hover:opacity-75" />
          </Link>
        </div>
        <div className="settingDiv1">
          <span className="pl-4">学生认证</span>
          <div className="col-span-2 text-center text-sm">
            <p>{userInfo.RealName}</p>
            <p>{userInfo.StudyId}</p>
          </div>
        </div>
        <div className="settingDiv1">
          <span className="pl-4">修改密码</span>
          <Link href="/user/setting/changePwd">
            <ChevronRightIcon className="w-6 absolute right-4 cursor-pointer  hover:scale-125 hover:-translate-y-1 transition-all hover:opacity-75" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
