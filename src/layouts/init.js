import React, {Component} from 'react';
import {Layout, Menu,} from 'antd';
import HeaderBar from '../layouts/HeaderBar/headerBar';
import NavBar from '../layouts/NavBar/navBar'
import FooterBar from "../layouts/FooterBar/footerBar";
import BreadcrumbBar from '../layouts/BreadcrumbBar/breadcrumbBar';
import 'antd/dist/antd.css'


const {Header, Content, Footer, Sider,} = Layout;

const SubMenu = Menu.SubMenu;


class Init extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <div className="init">
                <Layout className="init-content">
                    <HeaderBar></HeaderBar>
                    <Layout>

                        <Sider collapsible
                               collapsed={this.state.collapsed}
                               onCollapse={this.onCollapse}><NavBar></NavBar></Sider>
                        <Layout>
                            <BreadcrumbBar></BreadcrumbBar>
                            <Content>Content</Content>
                            <FooterBar></FooterBar>
                        </Layout>

                    </Layout>

                </Layout>
            </div>
        );
    }
}

export default Init;
