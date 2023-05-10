import Button from '../components/Button';
import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import useCountDown from '../hooks/useCountDown';
import { Input, Toast } from 'antd-mobile';
import { loginBypwd } from '../redux/user/loginBypwd/slice';
import { loginBycode } from '../redux/user/loginBycode/slice';
import { useSelector, useAppDispatch } from '../redux/hooks';
import Router from 'next/router';
import { getCode } from '../service/api';
import { judgeCellphone } from '../utils/utils.js';
// import { encryptPwd } from '../utils/encrypt';

function login() {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useAppDispatch();

  const loginCategories = [
    { title: '验证码登录', id: 1 },
    { title: '密码登录', id: 2 },
  ];

  const [seconds, setSeconds] = useCountDown(0);
  const [phone, setPhone] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [code, setCode] = useState<any>('');
  let judgement = judgeCellphone(phone);

  const sendCode = async () => {
    if (phone == '') {
      Toast.show({
        content: '请输入手机号',
      });
    } else {
      if (judgement == undefined) {
        const { data } = await getCode({
          phone: phone,
        });
        Toast.show({
          content: data.msg,
        });

        setSeconds(60);
      } else {
        Toast.show({
          content: judgement,
        });
      }
    }
  };

  useEffect(() => {
    if (jwt !== null) {
      localStorage.setItem('jwt', jwt);
      //跳转到home页面
      Router.push('/');
    }
  }, [jwt]);

  const onSubmit = () => {
    if (phone == '') {
      Toast.show({
        content: '请输入手机号',
      });
    } else {
      // 密码md5加密
      // let Password = encryptPwd(password);
      dispatch(
        loginBypwd({
          phone: phone,
          password: password,
        }),
      );
    }
  };
  const onSubmitbyCode = () => {
    if (phone == '') {
      Toast.show({
        content: '请输入手机号',
      });
    } else {
      dispatch(
        loginBycode({
          phone: phone,
          verifiableCode: code,
        }),
      );
    }
  };
  return (
    <div className="relative">
      <div className="mt-24">
        <Tab.Group>
          <Tab.List className=" flex justify-center">
            {loginCategories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? 'borderGradient bg-[#35383C] text-white'
                      : 'border-b-2 border-[#35383C] text-[#747474]'
                  }`
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
            <Tab.Panel>
              <div className="absolute top-20 left-10 right-10  md:top-24 md:w-1/3 md:mx-auto">
                <label className="">
                  <span className="text-gray-700 text-xl font-medium">
                    电话号
                  </span>
                  <Input
                    placeholder="请输入电话号码"
                    className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    name="phone"
                    value={phone}
                    onChange={(val) => {
                      setPhone(val);
                    }}
                  />
                </label>

                <label className="">
                  <span className="text-gray-700 text-xl font-medium">
                    验证码
                  </span>
                  <Input
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    name="code"
                    placeholder="请输入验证码"
                    value={code}
                    onChange={(val) => {
                      setCode(val);
                    }}
                  />
                </label>

                <div className="mt-10 flex justify-between">
                  <Button
                    title={seconds > 0 ? `${seconds}s后再次获取` : '获取验证码'}
                    disabled={seconds !== 0}
                    onClick={() => sendCode()}
                  ></Button>
                  <Button title="登录" onClick={onSubmitbyCode} />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="absolute top-20 left-10 right-10 md:top-24 md:w-1/3 md:mx-auto">
                <label className="">
                  <span className="text-gray-700 text-xl font-medium">
                    电话号
                  </span>

                  <Input
                    placeholder="请输入电话号码"
                    className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    name="phone"
                    value={phone}
                    onChange={(val) => {
                      setPhone(val);
                    }}
                  />
                </label>

                <label className="">
                  <span className="text-gray-700 text-xl font-medium">
                    密码
                  </span>
                  <Input
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="请输入密码"
                    value={password}
                    type="password"
                    onChange={(val) => {
                      setPassword(val);
                    }}
                  />
                </label>
                <div className=" mt-10 flex justify-between">
                  <Button title="登录" width="w-full" onClick={onSubmit} />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default login;
