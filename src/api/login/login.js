import request from '@/core/request'

// 登录方法
export function login(param) {
    return request({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        responseType:'json',
        method: 'post',
        url: '/dev-api/admin/login',
        data: param
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/auth/token/logout',
        method: 'delete'
    })
}

// 刷新方法
export function token() {
    return request({
        url: '/auth/token/refresh',
        method: 'post'
    })
}

// 获取用户详细信息
export function info() {
    return request({
        url: '/system/user/getInfo',
        method: 'get'
    })
}

// 获取验证码
export function code() {
    return request({
        url: '/jcaptcha.jpg',
        method: 'get'
    })
}
