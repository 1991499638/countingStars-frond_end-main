import React, { useEffect, useState } from 'react';
import BackRouter from '../../../components/BackRouter';
import Button from '../../../components/Button';
import useCountDown from '../../../hooks/useCountDown';
import { Input, Toast } from 'antd-mobile';
import { changePhoneNum, getphoneCode } from '../../../service/api';
import Header from '../../../components/Header';
import { useRouter } from 'next/router';
import { useSelector } from '../../../redux/hooks';
import { judgeCellphone } from '../../../utils/utils.js';
function changePhone() {
  const router = useRouter();

  const [second, setSecond] = useCountDown(0);
  const [newNum, setNewnum] = useState < any > (null);
  const [code, setCode] = useState < any > (null);
  const Phone = useSelector((s) => s.userInfo.data.Phone)
  const oldNum = Phone.toString();

  const sendCode = async (param: any) => {
    let judgement = judgeCellphone(newNum);
    if (newNum == null) {
      Toast.show({
        content: '请输入手机号'
      })
    } else {
      if (judgement == undefined) {
        const { data } = await getphoneCode({
          phone: newNum,
        });
        Toast.show({
          content: data.msg
        })
        setSecond(60);
      } else {
        Toast.show({
          content: judgement
        })
      }
    }
  };
  const submit = async () => {
    const { data } = await changePhoneNum({
      oldPhone: oldNum,
      newPhone: newNum,
      verifiableCode: code,
    });
    localStorage.setItem('jwt', data.data);
    router.push('/user/setting')
    Toast.show({
      content: '修改成功'
    })
  };

  return (
    <div>
      <Header />
      <BackRouter />
      <div className="scaleTslateB mt-48 mx-3 md:mt-20 border-[1px] opacity-75 border-cyan-200 shadow-md shadow-purple-300 p-4 md:w-1/2 md:mx-auto">
        <div className=" flex flex-col items-center space-y-12">
          <Input
            placeholder="请输入新手机号"
            value={newNum}
            onChange={(val) => {
              setNewnum(val);
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
              className="sendingCode absolute right-8 "
              disabled={second !== 0}
              onClick={sendCode}
            >
              {second > 0 ? `${second}s后再次获取` : '获取验证码'}
            </button>
          </div>
          <Button title="提交" padding="px-4 py-2" onClick={submit}></Button>
        </div>
      </div>
    </div>
  );
}

export default changePhone;
