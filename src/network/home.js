import {request} from "./request";
import {request01} from "./request01";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeData(type,page) {
  console.log(page);
  return request01({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
