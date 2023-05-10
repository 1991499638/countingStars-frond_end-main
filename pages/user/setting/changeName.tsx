import React, { useState } from 'react';
import BackRouter from '../../../components/BackRouter';
import Button from '../../../components/Button';
import { changeName } from '../../../service/api';
import { Input, Toast } from 'antd-mobile';
import Header from '../../../components/Header';
import { useRouter } from 'next/router';

function changenickName() {
  const router = useRouter();

  const [newname, setName] = useState<any>(null);
  const changenewName = async () => {
    await changeName({
      name: newname,
    });
    router.push('/user/setting')
    Toast.show({
      content: '修改成功'
    })
  };
  return (
    <div>
      <BackRouter />
      <Header />
      <div className="scaleTslateB mt-48 mx-3 md:mt-20 border-[1px] opacity-75 border-cyan-200 shadow-md shadow-purple-300 p-4 md:w-1/2 md:mx-auto">
        <div className=" flex flex-col items-center">
          <Input
            placeholder="请输入新昵称"
            clearable
            value={newname}
            onChange={(val) => {
              setName(val);
            }}
          />
          <div className="flex justify-center mt-6">
            <Button
              title="提交"
              padding="px-4 py-2"
              onClick={changenewName}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default changenickName;
