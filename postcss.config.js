module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    autoprefixer: {},
    "postcss-px-to-viewport-8-plugin": {
      viewportWidth: 375, //视窗的宽度，对应我们设计稿的宽度，一般指retina（一个点两个像素），宽度750
      viewportHeight: 812, //视窗的高度，对应我们设计稿的高度，可以不配置
      propList: ["*"],
      unitPrecision: 5, //指定`px`转化成视窗单位值的小数位数（很多时候不能整除）
      viewportUnit: "vw", //指定需要转换的视窗单位 建议'vw'
      //selectorBlackList: ["node_modules"], //指定不需要转换的类
      //exclude: [/TabBar/], //指定不要转换的文件，数组内应该是正则表达式
      minPixelVaule: 1, //小于或者等于1px不转换为视窗单位
    },
  },
};
