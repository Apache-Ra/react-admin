import React, {Component} from 'react';
import {Dropdown, Menu, message} from 'antd';
import './headerBar.less';
import logo from '../../logo.svg'
import userImg from '../../assets/img/user.jpg'


export default class HeaderBar extends Component {
    // 退出登录
    logout = () => {
        message.warning('你将退出登录');
    };

    render() {
        // 点击用户头像弹出菜单
        const menu = (
            <Menu className='HeaderBar'>
                <Menu.ItemGroup title='设置中心' className='menu-group'>
                    <Menu.Item>个人设置</Menu.Item>
                    <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        );
        return (
            <div id="HeaderBar">
                <div className="logo">
                    <div className="img"><img src={logo} className="App-logo" alt="logo"/></div>
                    <div className="txt">REACT 项目分发平台</div>
                </div>
                {/*<Menu className="nav"*/}
                {/*      theme="dark"*/}
                {/*      mode="horizontal"*/}
                {/*      defaultSelectedKeys={['1']}>*/}
                {/*    <Menu.Item key="1">项目</Menu.Item>*/}
                {/*    <Menu.Item key="2">推送</Menu.Item>*/}
                {/*    <Menu.Item key="3">权限</Menu.Item>*/}
                {/*    <Menu.Item key="4">系统</Menu.Item>*/}
                {/*</Menu>*/}
                <Dropdown overlay={menu} trigger={['click']}>
                    <div className="ant-dropdown-link userInfo" href="#">
                        <p className="userImg"><img src={userImg} alt=""/></p>
                        {/*<p className="userTxt">系统管理员 <Icon type="down"/></p>*/}
                    </div>
                </Dropdown>
            </div>
        )
    }

}