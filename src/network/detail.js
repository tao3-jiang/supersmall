import {request01} from './request01'

export function getDetailData(iid) {
  return request01({
    url:'/detail',
    params:{
      iid
    }
  })
}
