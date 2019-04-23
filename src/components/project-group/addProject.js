import React, {Component} from 'react';

export default class AddProject extends Component {
    state = {
        current: 'AddProject',
        title: '新增项目'
    }

    render() {
        return (
            <div id="AddProject">
                新增项目
            </div>
        )
    }

}