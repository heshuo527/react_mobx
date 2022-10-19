import userStore from "./userStroe";
// userStore是一个class类，需要new 类的实例来进行使用,暴露的也是类的实例
const obj={
    user:new userStore()
}

export default obj;