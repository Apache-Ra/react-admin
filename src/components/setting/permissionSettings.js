import React, {Component} from 'react';

export default class PermissionSettings extends Component {
    state = {
        current: 'PermissionSettings',
        title: '权限设置'
    }

    render() {
        return (
            <div id="PermissionSettings">
                权限设置
            </div>
        )
    }

}