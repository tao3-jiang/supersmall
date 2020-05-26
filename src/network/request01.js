import axios from 'axios'

export function request01(config){

  //最终的解决方案，因为最终的instance1返回一个pormise，所以可以吧上面的代码省略成这样
  const instance1 = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    timeout:5000
  })
  //请求拦截
  instance1.interceptors.request.use(config=>{
    //如果不设置返回值，就会出现问题
    //返回config就不会出现问题，至于为什么，自己慢慢想
    return config
  },err=>{
    console.log(err);
  })
  // 返回拦截
  instance1.interceptors.response.use(config=>{
    //如果不设置返回值，就会出现问题
    //返回config就不会出现问题，至于为什么，自己慢慢想
    return config
  },err => {
    console.log(err);
  })

  //因为instance1返回的是一个promise，而这里没有在instance1(config)后面加.then，所以可以在调用这个函数的地方使用.then
  return instance1(config)
}
