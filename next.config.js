/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const withTM = require('next-transpile-modules')(['antd-mobile']);

module.exports = withTM(
  withImages({
    // 项目中其他的 Next.js 配置
    images: {
      domains: ['countingstar-1313980227.cos.ap-chengdu.myqcloud.com'],
    },
    async rewrites() {
      return [
        //接口请求 前缀带上/api-text/
        {
          source: '/api-text/:path*',
          destination: `http://43.136.240.218:8080/:path*`,
        },
      ];
    },
  }),
);
