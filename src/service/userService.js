import axios from './../utils/axios'
import api from './../api'
export function User_Login({userName,userPwd}){
    return new Promise((resolve,reject)=>{
         axios.post(api.userApi.USER_LOGIN,{userName,userPwd}).then((res)=>{
               resolve(res.data);
         }).catch((err)=>{
               reject(err);
         })
    })
}