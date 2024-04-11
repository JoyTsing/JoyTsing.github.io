// 引入后进行初始化
import Aegis from 'aegis-web-sdk';

const aegis = new Aegis({
    id: 'KJ3Z9cqQKqVQvQkYQz', // 上报 id
    uin: 'joyblog', // 用户唯一 ID（可选）
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true, // spa 应用页面跳转的时候开启 pv 计算
    hostUrl: 'https://rumt-sg.com',
});