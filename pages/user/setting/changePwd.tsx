import React, { useState } from 'react';
import BackRouter from '../../../components/BackRouter';
import Button from '../../../components/Button';
import useCountDown from '../../../hooks/useCountDown';
import { changepwd, getChangepwd } from '../../../service/api';
import { Input, Toast } from 'antd-mobile';
import Header from '../../../components/Header';
import { useRouter } from 'next/router';
import { passwordValid } from '../../../utils/utils.js';
// import { encryptPwd } from '../../../utils/encrypt';

function changePwd() {
  const router = useRouter();
  const [seconds, setSeconds] = useCountDown(0);
  const [newpwd, setPwd] = useState < any > (null);
  const [code, setCode] = useState < any > (null);

  const sendCode = async () => {
    const { data } = await getChangepwd();
    Toast.show({
      content: data.msg
    })
    setSeconds(4);
  };
  const submit = async () => {
    let judgement = passwordValid(newpwd);
    // 密码md5加密
    // let Newpwd = encryptPwd(newpwd);
    if (judgement == undefined) {
      const { data } = await changepwd({
        password: newpwd,
        verifiableCode: code,
      });
      Toast.show({
        content: data.msg
      })
      router.push('/user/setting')
    } else {
      Toast.show({
        content: judgement
      })
    }
  };
  return (
    <div>
      <BackRouter />
      <Header />
      <div className="scaleTslateB mt-32 mx-3 md:mt-20 border-[1px] opacity-75 border-cyan-200 shadow-md shadow-purple-300 p-4 md:w-1/2 md:mx-auto">
        <div className=" flex flex-col items-center space-y-12">
          <Input
            placeholder="请输入新密码"
            value={newpwd}
            onChange={(val) => {
              setPwd(val);
            }}
          />
          <div className="w-full relative">
            <Input
              placeholder="请输入验证码"
              value={code}
              onChange={(val) => {
                setCode(val);
              }}
            />
            <button
              className="py-3 px-4 mt-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              disabled={seconds !== 0}
              onClick={() => sendCode()}
            >
              {seconds > 0 ? `${seconds}s后再次获取` : '获取验证码'}
            </button>
          </div>
          <Button title="提交" padding="py-2 px-4" onClick={submit}></Button>
        </div>
      </div>
    </div>
  );
}

export default changePwd;
