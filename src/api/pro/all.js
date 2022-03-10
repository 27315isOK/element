import request from '@/utils/request';

export function allpro(data) {
    return request({
        url: 'pro/list',
        method: 'get',
        params:data
    })
}

export function getCategory() {
    return request({
        url: 'pro/getCategory',
        method: 'get',
    })
}

export function searchPro(data) {
    return request({
        url: 'pro/searchPro',
        method: 'get',
        params:data
    })
}

