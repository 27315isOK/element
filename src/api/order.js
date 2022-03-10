import request from '@/utils/request'

export function orderList(){
    return request({
        url: 'order/list',
        method: 'get',
      })
}

export function orderbystatus(data){
    return request({
      url:'order/statusList',
      method:'get',
      params: data
    })
}

export function updatastatus(data){
    return request({
      url:'order/updateStatus',
      method:'get',
      params:data
    })
}