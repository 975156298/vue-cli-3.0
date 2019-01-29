// axios 全局配置。
import axios from 'axios'
// import store from '../store'

let instance = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 5000,
    headers: {'Content-type': 'application/x-www-form-urlencoded'}
})

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

function ajax (method, url, params, timeout = 5000) {
    return new Promise((resolve, reject) => {
        let ajaxParams = {}
        if (method === 'post') {
            ajaxParams = {
                method: method,
                url: url,
                data: params,
                timeout: timeout
            }
        } else {
            ajaxParams = {
                method: method,
                url: url,
                params: params,
                timeout: timeout
            }
        }
        instance(ajaxParams)
            .then(res => {
                let result = res.data
                resolve(result)
            }).catch((error) => {
            reject(error)
        })
    })
}

export {
    instance,
    ajax as api
}
