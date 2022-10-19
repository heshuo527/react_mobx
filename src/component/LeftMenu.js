import React from 'react'
import {inject,observer} from 'mobx-react'
import * as IconNode from '@ant-design/icons';
import {  Menu } from 'antd';
import { Link} from 'react-router-dom';
function LeftMenu(props) {

// 1. 拿到mobx中user存储的user.menuInfo   props.user.user.menuInfo
// 2. menuInfo数组，生成对应菜单要求的数组 
/**
 * [
      {
        key: '1',
        icon: <UserOutlined />,
        label: '菜单1',
      },
      {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: '菜单2',
      },
      {
        key: '3',
        icon: <UploadOutlined />,
        label: '菜单3',
      },
    ]
 * 
 * 
*/

console.log(props.user.userInfo);
console.log(sessionStorage.getItem("user"));
    function bindMenu(menuList){
        let arr = [];
       menuList.map((item)=>{
            const ICON = IconNode[item.menuImgClass];
            if(item.menuChilds && item.menuChilds.length>0){
                arr.push({
                    key: item.menuId,
                    icon: <ICON />,
                    label: item.menuName,
                    children:[...bindMenu(item.menuChilds)]
                  });
            }else{
                arr.push({
                    key: item.menuId,
                    icon: <ICON />,
                    label: <Link to={item.menuUrl}>{item.menuName}</Link>,
                  });
            }
           
        })
        return arr;
    }
  //console.log("bindMenu",bindMenu(props.user.user.menuInfo))

  //const menuInfo = Object.keys(props.user.user).length>0? props.user.user.menuInfo:[];
  console.log("渲染",props.user.userInfo);
  console.log("menuInfo",props.user.userInfo.menuInfo);
  return (
    <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
    items={bindMenu(props.user.userInfo.menuInfo ? props.user.userInfo.menuInfo:[])}
  />
  )
}


export default inject('user')(observer(LeftMenu))