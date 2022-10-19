// 用于创建路由(可以根据数据，生成动态的路由)
import {useRoutes} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
// react 动态加载组件 @loadable/component
import loadable from '@loadable/component'
import {observer,inject} from 'mobx-react'
const PrivateRoute = (props)=>{
   function bindRouter(list){
    let arr = [];
      list.map((item)=>{
        const ComponentNode = loadable(()=>{
            return import("./"+item.componentPath)
        })
          if(item.menuChilds && item.menuChilds.length>0){
            if(item.isContainChildren){
                arr.push({
                    path:item.pathRoute,
                    element:<ComponentNode/>,
                    children:[...bindRouter(item.menuChilds)]
                })
            }else{
                arr.push({
                    path:item.pathRoute,
                    //element:<ComponentNode/>
                    children:[...bindRouter(item.menuChilds)]
                })
            }
           
          }else{
          
            arr.push({
                path:item.pathRoute,
                element:<ComponentNode/>
            })
          }
      })
      return arr;
   }

   const menuInfo = props.user.userInfo.menuInfo ? props.user.userInfo.menuInfo:[];
    return useRoutes([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/index",
            element:<Home />,
            children:[...bindRouter(menuInfo)]
        }
    ])
}

export default inject('user')(observer(PrivateRoute));