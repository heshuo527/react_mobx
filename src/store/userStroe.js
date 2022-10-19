
import { makeAutoObservable,runInAction} from 'mobx'
import service from './../service'
class userStore{
    // 可观察的属性，observable , computed , action ...
     constructor(){
        makeAutoObservable(this);
     }
    userInfo = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{};
    // get user(){
    //    if(sessionStorage.getItem("user")){
    //         return JSON.parse(sessionStorage.getItem("user"));
    //    }
    //     return {};
    // }
    // set user(data){
    //     sessionStorage.setItem("user",JSON.stringify(data));
    // }
    get token(){
        if(sessionStorage.getItem("token")){
            return sessionStorage.getItem("token");
        }
        return "";
    }
    set token(value){
        sessionStorage.setItem("token",value);
    }

    login=(userInput)=>{
        // 只进行数据处理，不进行界面的提示信息
        return new Promise((resolve,reject)=>{
            // 1. 发起axios请求
            service.userSerive.User_Login(userInput).then((data)=>{
                console.log("store - login",data);
                //runInAction(()=>{
                      this.token = data.token;
                      this.userInfo = data.data;
                      sessionStorage.setItem("user",JSON.stringify(data.data));
                     // this.user = data.data;
                //})
              
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        });
    }
} 


// token  属性
// user 属性 

// login action(发起请求) 


export default userStore