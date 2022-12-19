/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */

const url = 'https://oa-test.oafoodism.cc';

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const Timestamp = new Date().getTime();
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const smp = new SpeedMeasurePlugin();
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'test' ? '/foodism-ui' : '/',
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  chainWebpack: (config) => {
    config.output.filename('[name].[hash].js').end();
    const entry = config.entry('app');
    entry.add('babel-polyfill').end();
    entry.add('classlist-polyfill').end();
    config.optimization.minimize(true);
    // config.optimization = {
    //   runtimeChunk: {
    //     name: "manifest",
    //   },
    // };
  },
  css: {
    // 忽略 CSS order 顺序警告
    extract: { ignoreOrder: true },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 仅在生产环境下启用该配置
      console.log('324234234');
      return {
        performance: {
          // 打包后最大文件大小限制
          maxAssetSize: 300000000,
        },
        // optimization: {
        //   minimizer: [
        //     new UglifyJsPlugin({
        //       uglifyOptions: {
        //         output: { comments: false },
        //         compress: {
        //           drop_debugger: true,
        //           drop_console: true,
        //           pure_funcs: ["console.log"],
        //         },
        //         sourceMap: false,
        //         parallel: true,
        //       },
        //     }),
        //   ],
        // },
        output: {
          // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
          filename: `[name].${Timestamp}.js`,
          chunkFilename: `[name].${Timestamp}.js`,
        },
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' + productionGzipExtensions.join('|') + ')$',
            ),
            threshold: 1024, // 只有大小大于该值的资源会被处理,当前配置为对于超过1k的数据进行处理，不足1k的可能会越压缩越大
            minRatio: 0.99, // 只有压缩率小于这个值的资源才会被处理
            //deleteOriginalAssets: true, // 删除原文件
          }),
          new SpeedMeasurePlugin(),
        ],
      };
    }
    return {
      plugins: [
        new HardSourceWebpackPlugin(),
        new HardSourceWebpackPlugin.ExcludeModulePlugin([
          {
            test: /mini-css-extract-plugin[\/]dist[\/]loader/,
          },
        ]),
      ],
      optimization: {
        minimize: false, // 开发环境不使用压缩
      },
    };
  },
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    port: 8080,
    https: true,
    proxy: {
      '/': {
        target: url,
        logLevel: 'debug',
        changeOrigin: true,
        secure: false,
        ws: true, // 需要websocket 开启
        secure: false,
        pathRewrite: {
          '^/': '',
        },
      },
    },
  },
};
