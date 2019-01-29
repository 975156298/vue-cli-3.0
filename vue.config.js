module.exports = {
    // 选项...
    publicPath: './',
    assetsDir: 'static', // 生成静态文件的文件夹。
    devServer: { // 该参数用于修改默认的 webpack里面的配置
        host: '0.0.0.0',
        port: '8081'
        // proxy: {} // 反向代理
    }
}