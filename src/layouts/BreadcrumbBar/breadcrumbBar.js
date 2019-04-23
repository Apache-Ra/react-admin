import React, {Component} from 'react';
import { Breadcrumb, Icon } from 'antd';
import './breadcrumbBar.less';

export default class BreadcrumbBar extends Component {
    state = {
        current: 'home',
    }

    render() {
        return (
            <div id="BreadcrumbBar">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>,
            </div>
        )
    }

}