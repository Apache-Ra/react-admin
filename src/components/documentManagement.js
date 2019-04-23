import React, {Component} from 'react';

export default class DocumentManagement extends Component {
    state = {
        current: 'DocumentManagement',
        title: '文件管理'
    }

    render() {
        return (
            <div id="DocumentManagement">
                文件管理
            </div>
        )
    }

}