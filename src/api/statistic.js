
import request from '@/utils/request'  //封装的axios
//调用获取商品总数量的接口方法
export function pros() {  //data调用这个方法的时候，传过来的数据
  return request({   //这里是使用axios调用一个接口
    url: 'statistic/product',
    method: 'get',
    
  })
}

export function users() {  //data调用这个方法的时候，传过来的数据
  return request({   //这里是使用axios调用一个接口
    url: 'statistic/user',
    method: 'get',

  })
}