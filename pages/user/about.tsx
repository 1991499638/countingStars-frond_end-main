import React from 'react';
import BackRouter from '../../components/BackRouter';
import Header from '../../components/Header';

function about() {
  return (
    <div>
      <BackRouter />
      <Header />
      <div className="mt-4 flex items-center justify-center">
        <p>由科技金融中心开发</p>
      </div>
    </div>
  );
}

export default about;
