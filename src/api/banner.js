import request from '@/utils/request';

export function banners() {
    return request({
        url: 'banner/list',
        method: 'get'
    })
}

export function del(data) {
    return request({
        url: 'banner/delete',
        method: 'get',
        params: data
    })
}

export function updata(data){
    return request({
        url:'banner/updateFlag',
        method:'post',
        data
    })
}

export function add(data){
    return request({
        url:'banner/add',
        method:'post',
        
    })
}