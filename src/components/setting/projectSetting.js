import React, {Component} from 'react';

export default class PermissionSettings extends Component {
    state = {
        current: 'ProjectSetting',
        title: '权限设置'
    }

    render() {
        return (
            <div id="ProjectSetting">
                项目设置
            </div>
        )
    }

}