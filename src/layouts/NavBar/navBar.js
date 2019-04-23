import React, {Component} from 'react';
import {Icon, Menu} from 'antd';
import './navBar.less';

const SubMenu = Menu.SubMenu;


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    // 全部父级菜单数组集合
    rootSubmenuKeys = ['sub1', 'sub2'];
    // 状态信息
    state = {
        collapsed: false,
        openKeys: [],
        selectedKeys: []
    };
    // 只允许展开一个菜单
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    // 点击菜单触发事件
    onChangeMenu(item){

    }
    // 渲染
    render() {
        return (
            <div id="NavBar">
                <Menu theme="dark"
                      onClick={this.onChangeMenu}
                      openKeys={this.state.openKeys}
                      onOpenChange={this.onOpenChange}
                      defaultSelectedKeys={['1']}
                      mode="inline">
                    <Menu.Item key="ProjectAnalysis">
                        <Icon type="pie-chart"/>
                        <span> <a href="#/ProjectAnalysis">项目分析</a></span>
                    </Menu.Item>
                    <Menu.Item key="ProjectList">
                        <Icon type="desktop"/>
                        <span><a href="#/ProjectList">项目列表</a></span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span>项目小组</span></span>}>
                        <Menu.Item key="3"><a href="#/PersonnelManagement">人员管理</a></Menu.Item>
                        <Menu.Item key="4"><a href="#/AddPersonnel"></a>新增人员</Menu.Item>
                        <Menu.Item key="5"><a href="#/AddProject"></a>新增项目</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span>系统设置</span></span>}>
                        <Menu.Item key="6"><a href="#/PermissionSettings">权限设置</a></Menu.Item>
                        <Menu.Item key="8"><a href="#/ProjectSetting">项目设置</a></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file"/>
                        <span><a href="#/DocumentManagement">文件管理</a></span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

}

export default NavBar