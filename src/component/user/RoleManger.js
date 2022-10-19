import {Component} from 'react'
import {Outlet} from 'react-router-dom'
class RoleManger extends Component{
    render() {
        return (
            <>
                <h2>角色管理</h2>
               <Outlet/>
            </>
        )
    }
}

export default RoleManger