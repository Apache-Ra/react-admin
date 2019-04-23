import React, {Component} from 'react';
import {Layout,} from 'antd';
import RouterIndex from '../router/index'
import HeaderBar from '../layouts/HeaderBar/headerBar';
import NavBar from '../layouts/NavBar/navBar'
import FooterBar from "../layouts/FooterBar/footerBar";
import BreadcrumbBar from '../layouts/BreadcrumbBar/breadcrumbBar';
import 'antd/dist/antd.css'


const {Content, Sider,} = Layout;

class Init extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
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
                            <Content id="Content"><RouterIndex/></Content>
                            <FooterBar></FooterBar>
                        </Layout>

                    </Layout>

                </Layout>
            </div>
        );
    }
}

export default Init;
