import React, {Component} from 'react';
import './footerBar.less';

export default class FooterBar extends Component {
    state = {
        current: 'home',
    }

    render() {
        return (
            <div id="FooterBar">
                Ant Design ©2018 Created by Ant UED
            </div>
        )
    }

}