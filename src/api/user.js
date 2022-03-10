import request from '@/utils/request'  //封装的axios

export function login(data) {  //data是调用这个方法的时候，传过来的数据
  return request({   //这里是使用axios调用一个接口
    url: 'admin/login',
    method: 'post',
    data  // 需要传给接口的数据
  })
}
//在api文件里，把所有要请求的接口，都封装成方法
//当我们需要请求数据时，不用再axios，直接调用api文件里的方法即可
export function getInfo(token) {
  return request({
    url: 'admin/detail',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
