import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { Image } from 'antd-mobile';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Popup, Space, Button } from 'antd-mobile';
import { userInfoSlice, getUserInfo } from '../../redux/user/slice';
import { useAppDispatch, useSelector } from '../../redux/hooks';
import { SpinLoading } from 'antd-mobile';
import { userSlice } from '../../redux/user/loginBypwd/slice';
import { userwithcodeSlice } from '../../redux/user/loginBycode/slice';
import { useRouter } from 'next/router';

function index() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const loading = useSelector((state) => state.userInfo.loading);
  const error = useSelector((state) => state.userInfo.error);
  const userInfo: userInfoReq = useSelector((state) => state.userInfo.data);

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  if (loading) {
    return <SpinLoading />;
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  const onLogout = () => {
    dispatch(userSlice.actions.logOut());
    dispatch(userwithcodeSlice.actions.logOut());
    localStorage.clear();
    router.push('/');
  };

  return (
    <div className="md:w-2/3 mx-auto h-[120vh]">
      <div className="flex items-enter justify-end">
        <Link href="/user/setting">
          <button className=" text-lg m-2 px-4 border">设置</button>
        </Link>
      </div>

      <div className="flex flex-auto  items-center justify-around w-full">
        <div className=" relative w-[150px] h-[200px]">
          <Image
            src={userInfo.Picture}
            width={150}
            height={150}
            alt="Avatar"
            className="mt-[25px]"
          />
        </div>
        <div className="w-[200px]">
          <div className="border p-1 text-lg text-center font-medium mb-2">
            <p>{userInfo.NickName}</p>
          </div>
          <div className=" text-lg">
            <div>
              <p className="break-all text-xs">
                <span className="text-sm">链上地址:</span>
                {userInfo.Address}
              </p>
              <p className="break-all text-xs">
                <span className="text-sm">公钥:</span>
                {userInfo.PublicKey}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-start p-2 border">
          <p className="text-lg hover:text-blue-500">订单查询</p>
        </div>
        <div className="flex items-center justify-start p-2 border">
          <Link href="/user/redeem">
            <p className=" text-lg hover:text-blue-500 ">兑换码兑换</p>
          </Link>
        </div>
        <div className="flex items-center justify-start p-2 border">
          <Link href="/user/about">
            <p className=" text-lg  hover:text-blue-500">关于我们</p>
          </Link>
        </div>

        <div className=" mt-44 border">
          <Button block color="default" size="large" onClick={onLogout}>
            退出登录
          </Button>
        </div>
      </div>
      {visible1 ? <div>{userInfo.Address}</div> : <></>}
      {visible2 ? <div className="break-all">{userInfo.PublicKey}</div> : <></>}
      <Footer />
    </div>
  );
}

export default index;
