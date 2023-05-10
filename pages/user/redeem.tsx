import React, { useState, useEffect } from 'react';
import BackRouter from '../../components/BackRouter';
import { redeemCollection } from '../../service/api';
import { getQueryRecords } from '../../redux/user/getQueryRecords/slice';
import { useAppDispatch, useSelector } from '../../redux/hooks';
import { Input, Toast, SpinLoading  } from 'antd-mobile';
import RecordsList from '../../components/RedeemRecordsList';


function exchange() {
  const [rcode, setRcode] = useState < string > ('');

  const loading = useSelector((state) => state.getQueryRecords.loading);
  const error = useSelector((state) => state.getQueryRecords.error);
  const recordsList = useSelector((state) => state.getQueryRecords.data);
  const dispatch = useAppDispatch();

  const redeem = async () => {
    if (rcode == "") {
      Toast.show({
        content: '请输入由字母或数字组成的兑换码'
      })
    } else {
      await redeemCollection({
        redeem_code: rcode
      });
    }
  };

  useEffect(() => {
    dispatch(getQueryRecords());
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
      <div className="mt-36 flex flex-col items-center justify-center space-y-32">
        <div className="space-x-4">
          <Input
            className="x-6 py-2.5"
            placeholder="请输入兑换码"
            value={rcode}
            onChange={(val) => {
              setRcode(val);
            }}
          />

          <div className="flex justify-center">
            <button
              className="py-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={redeem}
            >
              兑换
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-32">兑换记录</h1>
      <div>
        <RecordsList recordsList={ recordsList } />
      </div>
    </div>
  );
}

export default exchange;
