## TypeScript基础语法

### 一、TypeScript的运行环境

1.搭建本地环境

```typescript
// 1. 全局安装TypeScript
npm install typescript -g
// 2.查看TypeScript的版本
tsc --version
// 3.编译ts
// tsc main.ts

```

2.配置运行环境

```typescript
// 1.通过webpack,配置本地的编译环境，开启服务运行在浏览器上
https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw

// 2.通过ts-node库，提供typescript的运行环境
npm install ts-node -g
npm install tslib @types/node -g

// ts-node main.ts => 输出结果
```

