import React, { useEffect, useState } from 'react';
import BackRouter from '../../../components/BackRouter';
import Button from '../../../components/Button';
import { changePicture } from '../../../service/api';
import { userInfoSlice, getUserInfo } from '../../../redux/user/slice';
import { useAppDispatch, useSelector } from '../../../redux/hooks';
import { SpinLoading, Toast } from 'antd-mobile';
import Header from '../../../components/Header';
import { useRouter } from 'next/router';

function changeAvatar() {
  const loading = useSelector((state) => state.userInfo.loading);
  const error = useSelector((state) => state.userInfo.error);
  const userInfo: userInfoReq = useSelector((state) => state.userInfo.data);
  const [file, setFile] = useState < any > (null);

  const router = useRouter();
  const formData = new FormData();
  formData.append('picture', file);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append('picture', file);
    console.log(formData);
    await changePicture(formData)
      .then((Response) => {
        console.log(Response);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push('/user/setting')
    Toast.show({
      content: '修改成功'
    })
  };

  const handleFileSelect = (event: any) => {
    setFile(event.target.files[0]);
  };

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
      <div className="scaleTslateB mt-48 mx-3 md:mt-20 border-[1px] opacity-75 border-cyan-200 shadow-md shadow-purple-300 p-4 md:w-1/2 md:mx-auto ">
        <form className="flex items-center space-x-6" onSubmit={handleSubmit}>
          <div className="shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={userInfo.Picture}
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              name="picture"
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
              "
              onChange={handleFileSelect}
            />
            <div className="flex justify-center mt-8">
              <Button title="提交" padding="px-4 py-2"></Button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default changeAvatar;
